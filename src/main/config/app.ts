import express from 'express'
import setupMiddlewares from './middlewares'
import setupoRoutes from './routes'

const app = express()
setupMiddlewares(app)
setupoRoutes(app)
export default app
