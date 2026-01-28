import bcrypt from 'bcrypt'
import { generateToken } from '../services/token.service.js'

const users = [] // MVP em memória

export async function register(req, res) {
  const { email, password } = req.body
  const hash = await bcrypt.hash(password, 10)

  users.push({ email, password: hash, plan: 'free' })
  res.json({ message: 'Usuário criado' })
}

export async function login(req, res) {
  const { email, password } = req.body
  const user = users.find(u => u.email === email)

  if (!user) return res.status(401).json({ error: 'Credenciais inválidas' })

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(401).json({ error: 'Credenciais inválidas' })

  const token = generateToken({ email: user.email, plan: user.plan })
  res.json({ token })
}
