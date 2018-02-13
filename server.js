const path = require('path')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.listen(process.env.PORT)
console.log('App running on ' + process.env.PORT)
