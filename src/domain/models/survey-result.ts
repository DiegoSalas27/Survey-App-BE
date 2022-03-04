export type SurveyResultModel = {
  surveyId: string | any
  question: string
  answers: SurveyResultAnswerModel[]
  date: Date
}

interface SurveyResultAnswerModel {
  image?: string
  answer: string
  count: number
  percent: number
}
