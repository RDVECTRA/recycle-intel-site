export function calculateScore(number) {
  let score = 100
  const signals = []

  if (number.startsWith('+55')) {
    score -= 5
    signals.push('Número brasileiro')
  }

  if (number.includes('9999')) {
    score -= 25
    signals.push('Padrão comum de spam')
  }

  if (number.length < 12) {
    score -= 15
    signals.push('Número curto')
  }

  let status = 'Seguro'
  if (score < 70) status = 'Atenção'
  if (score < 40) status = 'Alto Risco'

  return { number, score, status, signals }
}
