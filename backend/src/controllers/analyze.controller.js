import { calculateScore } from '../services/score.service.js'

export function analyze(req, res) {
  const { number } = req.body
  const result = calculateScore(number)
  res.json(result)
}
