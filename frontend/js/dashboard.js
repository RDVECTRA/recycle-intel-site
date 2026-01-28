async function analyze() {
  const number = document.getElementById('number').value
  const token = localStorage.getItem('token')

  const res = await fetch('http://localhost:3000/api/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ number })
  })

  document.getElementById('result').innerText =
    JSON.stringify(await res.json(), null, 2)
}
