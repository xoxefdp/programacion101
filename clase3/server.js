const express = require('express')
const cors = require('cors')

const app =  express()
const PORT = 8002
const max = 10
const min = 1

function randomNumber() {
  return parseInt(Math.random() * (max - min) + min)
}

app.get('/', cors(), (request, response, next) => {
  const numero = randomNumber()
  response.send({"numero": numero})
})

app.listen(PORT, () => {
  console.log(`Server listening port: ${PORT}`)
})
