const express = require('express');
const session = require('express-session');
const Controller = require('./controllers/controller');
const app = express()
const port = 3000
const indexRoutes = require('./routes/index');
const authenticate = require('./authenticationMiddleware');


app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs')


app.use(session({
  secret: 'rahasia',
  resave: false,
  saveUninitialized: false,
}));

app.use('/', indexRoutes);


app.get('/', (req, res) => {
  res.redirect('/lapakkita')
})
app.get('/lapakkita',Controller.lapakpedia)

app.get('/home',Controller.home)

app.get('/detail/:id',Controller.detail)

app.post('/product/add/:id',Controller.handlerAdd)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})