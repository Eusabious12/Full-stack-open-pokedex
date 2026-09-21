const express = require('express')
const app = express()

app.get('/health', (req, res) => {
  res.send('ok')
})

const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()