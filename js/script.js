function analyzeNumber() {
  const number = document.getElementById('numberInput').value
  const resultDiv = document.getElementById('result')

  if (!number) {
    alert('Digite um número válido')
    return
  }

  let score = 100

  if (number.startsWith('+55')) score -= 5
  if (number.includes('9999')) score -= 20

  let status = 'Seguro'
  let recommendation = 'Uso liberado'

  if (score < 70) {
    status = 'Atenção'
    recommendation = 'Evite uso imediato'
  }

  if (score < 40) {
    status = 'Alto Risco'
    recommendation = 'Alto risco de bloqueio'
  }

  resultDiv.classList.remove('hidden')
  resultDiv.innerHTML = `
    <strong>Número:</strong> ${number}<br>
    <strong>Score:</strong> ${score}<br>
    <strong>Status:</strong> ${status}<br>
    <strong>Recomendação:</strong> ${recommendation}
  `
}
