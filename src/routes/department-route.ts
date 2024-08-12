import express from 'express'
import { indexUser } from '../controllers/department-controller'

const router = express.Router()

router.get('/', indexUser)

export default router
