const express = require('express')
const app = express()
const path = require('path')
const indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')))





app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter)
app.listen(3000)
console.log("Escuchando en el puerto 3000")