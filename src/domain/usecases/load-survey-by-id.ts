import { SurveyModel } from '@domain/models/survey'

export interface LoadSurveyById {
  add(id: string): Promise<SurveyModel>
}
