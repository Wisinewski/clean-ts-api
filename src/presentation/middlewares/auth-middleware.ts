import { LoadAccountByToken } from './../../domain/usecases/load-account-by-token'
import { forbidden } from './../helpers/http/http-helper'
import { AccessDeniedError } from './../errors/access-denied-error'
import { Middleware, HttpRequest, HttpResponse } from './../protocols'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const headers = httpRequest.headers
    if (headers) {
      const accessToken = headers['x-access-token']
      if (accessToken) {
        await this.loadAccountByToken.load(accessToken)
      }
    }
    return forbidden(new AccessDeniedError())
  }
}
