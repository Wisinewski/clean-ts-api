import { makeDbLoadSurveys } from './../../../usecases/survey/load-surveys/db-load-surveys-factory'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'
import { Controller } from '../../../../../presentation/protocols'
import { LoadSurveysController } from '../../../../../presentation/controllers/survey/load-surveys/load-surveys-controller'

export const makeLoadSurveysController = (): Controller => {
  const surveyController = new LoadSurveysController(makeDbLoadSurveys())
  return makeLogControllerDecorator(surveyController)
}
