const express = require('express')
const app = express ()
const port = 3000
const indexRoutes = require('./routes/index.js');


app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended:true
}))

app.use('/', indexRoutes);

app.listen(port,()=>{
    console.log('spartan willy 3000');
})