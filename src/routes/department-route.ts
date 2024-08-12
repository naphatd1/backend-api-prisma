import express from 'express'
import { indexUser, userAll } from '../controllers/department-controller'

const router = express.Router()

router.get('/', indexUser)
router.get('/user', userAll)

export default router
