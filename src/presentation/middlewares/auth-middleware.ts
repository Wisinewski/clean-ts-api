import { forbidden } from './../helpers/http/http-helper'
import { AccessDeniedError } from './../errors/access-denied-error'
import { Middleware, HttpRequest, HttpResponse } from './../protocols'

export class AuthMiddleware implements Middleware {
  async handle (HttpRequest: HttpRequest): Promise<HttpResponse> {
    return forbidden(new AccessDeniedError())
  }
}
