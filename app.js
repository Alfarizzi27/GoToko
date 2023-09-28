const express = require('express');
const Controller = require('./controllers/controller');
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.redirect('/lapakkita')
})
app.get('/lapakkita', Controller.lapakpedia)

app.get('/home', Controller.home)

app.get('/detail/:id', Controller.detail)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})