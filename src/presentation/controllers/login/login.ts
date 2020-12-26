import { MissingParamError } from './../../errors/missing-param-error'
import { badRequest } from './../../helpers/http-helper'
import { HttpRequest, HttpResponse } from './../../protocols/http'
import { Controller } from './../../protocols/controller'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
    if (!httpRequest.body.password) {
      return badRequest(new MissingParamError('password'))
    }
  }
}
