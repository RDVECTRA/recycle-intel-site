import { Router } from 'express'
import { plans } from '../controllers/payment.controller.js'

const router = Router()
router.get('/plans', plans)

export default router
