import { LoadAccountByToken } from './../../domain/usecases/load-account-by-token'
import { forbidden, ok, serverError } from './../helpers/http/http-helper'
import { AccessDeniedError } from './../errors/access-denied-error'
import { Middleware, HttpRequest, HttpResponse } from './../protocols'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const headers = httpRequest.headers
      if (headers) {
        const accessToken = headers['x-access-token']
        if (accessToken) {
          const account = await this.loadAccountByToken.load(accessToken)
          if (account) {
            return ok({ accountId: account.id })
          }
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}
