import { JwtAdapter } from './jwt-adapter'
import jwt from 'jsonwebtoken'

const makeSut = (): JwtAdapter => {
  return new JwtAdapter('secret')
}

describe('Jwt Adapter', () => {
  test('should call sign with correct values', async () => {
    const sut = makeSut()
    const signSpy = jest.spyOn(jwt, 'sign')
    await sut.encrypt('any_id')
    // expect(signSpy).toHaveBeenCalledWith({ id: 'any_id' }, 'secret')
    expect(signSpy).toBeCalled()
  })
})
