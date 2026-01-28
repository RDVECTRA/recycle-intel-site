import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes.js'
import analyzeRoutes from './routes/analyze.routes.js'
import paymentRoutes from './routes/payment.routes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/analyze', analyzeRoutes)
app.use('/api/payment', paymentRoutes)

app.listen(process.env.PORT, () => {
  console.log(`♻️ Backend rodando na porta ${process.env.PORT}`)
})
