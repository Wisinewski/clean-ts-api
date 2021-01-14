import { makeDbAddSurvey } from './../../usecases/add-survey/db-add-survey-factory'
import { makeAddSurveyValidation } from './add-survey-validation-factory'
import { AddSurveyController } from './../../../../presentation/controllers/survey/add-survey/add-survey-controller'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'
import { Controller } from '../../../../presentation/protocols'

export const makeAddSurveyController = (): Controller => {
  const loginController = new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvey())
  return makeLogControllerDecorator(loginController)
}
