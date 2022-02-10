const express = require('express')
const app = express()
const port = 5500

app.get('/', (req, res) => {
  res.send('/index.html')
})

app.get('/index.html', (req, res) => {
    res.send('/index.html')
  })
app.get('/help.html', (req, res) => {
    res.render('help.html')
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})