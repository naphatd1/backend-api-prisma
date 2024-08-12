import express from 'express'
import { indexUser, userAll, customerAll } from '../controllers/department-controller'

const router = express.Router()

router.get('/', indexUser)
router.get('/user', userAll)
router.get('/customer', customerAll)

export default router
