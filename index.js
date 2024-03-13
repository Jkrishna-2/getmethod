const express = require('express')
const app = express()
app.get('/', (request, response) => {
  response.send('Hello world!')
  console.log(request)
  console.log(response)
})

app.listen(3000)
