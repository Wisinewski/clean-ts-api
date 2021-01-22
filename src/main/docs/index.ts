import { badRequest, serverError, unauthorized, notFound, forbidden } from './components'
import { signUpParamsSchema, loginParamsSchema, errorSchema, accountSchema, surveyAnswerSchema, surveySchema, surveysSchema, apiKeyAuthSchema } from './schemas'
import { loginPath, surveyPath, signUpPath } from './paths'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'API para realizar enquetes',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Enquete'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    survey: surveySchema,
    surveys: surveysSchema,
    surveyAnswer: surveyAnswerSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    error: errorSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    serverError,
    unauthorized,
    notFound,
    forbidden
  }
}
