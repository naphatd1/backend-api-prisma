import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

import indexRoute from './routes/department-route'

const app: Express = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1', indexRoute)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(` 🚀🚀🚀 Server is running at http://localhost:${port}`)
})
