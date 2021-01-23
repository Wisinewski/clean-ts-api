import {
  saveSurveyResultParamsSchema,
  surveyResultSchema,
  addSurveyParamsSchema,
  signUpParamsSchema,
  loginParamsSchema,
  errorSchema,
  accountSchema,
  surveyAnswerSchema,
  surveySchema,
  surveysSchema,
  surveyResultAnswerSchema
} from './schemas/'

export default {
  account: accountSchema,
  survey: surveySchema,
  surveys: surveysSchema,
  surveyAnswer: surveyAnswerSchema,
  surveyResult: surveyResultSchema,
  surveyResultAnswer: surveyResultAnswerSchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  addSurveyParams: addSurveyParamsSchema,
  saveSurveyResultParams: saveSurveyResultParamsSchema,
  error: errorSchema
}
