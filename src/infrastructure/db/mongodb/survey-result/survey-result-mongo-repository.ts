import { SaveSurveyResultRepository } from '@data/protocols/db/survey-result/save-survey-result-repository'
import { LoadSurveyResultRepository } from '@data/usecases/load-survey-result/db-load-survey-result-protocols'
import { SurveyResultModel } from '@domain/models/survey-result'
import { SaveSurveyResultParams } from '@domain/usecases/survey-result/save-survey-result'
import { ObjectId } from 'mongodb'
import { MongoHelper, QueryBuilder } from '../helpers'

export class SurveyResultMongoRepository implements SaveSurveyResultRepository, LoadSurveyResultRepository {
  async save(data: SaveSurveyResultParams): Promise<void> {
    const surveyResultColletion = MongoHelper.getCollection<SurveyResultModel>('surveysResults')
    await surveyResultColletion.findOneAndUpdate(
      {
        surveyId: new ObjectId(data.surveyId),
        accountId: new ObjectId(data.accountId)
      },
      {
        $set: {
          answer: data.answer,
          date: data.date
        }
      },
      {
        upsert: true
      }
    )
  }

  async loadBySurveyId(surveyId: string): Promise<SurveyResultModel> {
    const surveyResultCollection = MongoHelper.getCollection<SurveyResultModel>('surveysResults')
    const query = new QueryBuilder()
      .match({ surveyId: new ObjectId(surveyId) })
      .group({
        _id: 0.0,
        data: {
          $push: '$$ROOT'
        },
        total: {
          $sum: 1.0
        }
      })
      .unwind({
        path: '$data'
      })
      .lookup({
        from: 'surveys',
        localField: 'data.surveyId',
        foreignField: '_id',
        as: 'survey'
      })
      .unwind({
        path: '$survey'
      })
      .group({
        _id: {
          surveyId: '$survey._id',
          question: '$survey.question',
          date: '$survey.date',
          total: '$total',
          answer: '$data.answer',
          answers: '$survey.answers'
        },
        count: {
          $sum: 1.0
        }
      })
      .project({
        _id: 0.0,
        surveyId: '$_id.surveyId',
        question: '$_id.question',
        date: '$_id.date',
        answers: {
          $map: {
            input: '$_id.answers',
            as: 'item',
            in: {
              $mergeObjects: [
                '$$item',
                {
                  count: {
                    $cond: {
                      if: {
                        $eq: ['$$item.answer', '$_id.answer']
                      },
                      then: '$count',
                      else: 0.0
                    }
                  },
                  percent: {
                    $cond: {
                      if: {
                        $eq: ['$$item.answer', '$_id.answer']
                      },
                      then: {
                        $multiply: [
                          {
                            $divide: ['$count', '$_id.total']
                          },
                          100.0
                        ]
                      },
                      else: 0.0
                    }
                  }
                }
              ]
            }
          }
        }
      })
      .group({
        _id: {
          surveyId: '$surveyId',
          question: '$question',
          date: '$date'
        },
        answers: {
          $push: '$answers'
        }
      })
      .project({
        _id: 0.0,
        surveyId: '$_id.surveyId',
        question: '$_id.question',
        date: '$_id.date',
        answers: {
          $reduce: {
            input: '$answers',
            initialValue: [],
            in: {
              $concatArrays: ['$$value', '$$this']
            }
          }
        }
      })
      .unwind({
        path: '$answers'
      })
      .group({
        _id: {
          surveyId: '$surveyId',
          question: '$question',
          date: '$date',
          answer: '$answers.answer',
          image: '$answers.image'
        },
        count: {
          $sum: '$answers.count'
        },
        percent: {
          $sum: '$answers.percent'
        }
      })
      .project({
        _id: 0.0,
        surveyId: '$_id.surveyId',
        question: '$_id.question',
        date: '$_id.date',
        answer: {
          answer: '$_id.answer',
          image: '$_id.image',
          count: '$count',
          percent: '$percent'
        }
      })
      .sort({
        'answer.count': -1.0
      })
      .group({
        _id: {
          surveyId: '$surveyId',
          question: '$question',
          date: '$date'
        },
        answers: {
          $push: '$answer'
        }
      })
      .project({
        _id: 0.0,
        surveyId: '$_id.surveyId',
        question: '$_id.question',
        date: '$_id.date',
        answers: '$answers'
      })
      .build()

    const surveyResult = await surveyResultCollection.aggregate<SurveyResultModel>(query).toArray()
    return surveyResult.length ? surveyResult[0] : null
  }
}
