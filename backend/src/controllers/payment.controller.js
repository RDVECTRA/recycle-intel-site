export function plans(req, res) {
  res.json({
    free: '10 análises/dia',
    pro: 'ilimitado',
    enterprise: 'custom'
  })
}
