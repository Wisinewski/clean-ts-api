import setupMiddlewares from './middlewares'
import setupoRoutes from './routes'
import setupSwagger from './config-swagger'

import express from 'express'

const app = express()
setupSwagger(app)
setupMiddlewares(app)
setupoRoutes(app)
export default app
