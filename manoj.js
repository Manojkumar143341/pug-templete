const express = require('express')
const app = express()
const path = require('path')
const PORT = 3500


app.set('view engine', 'pug');


app.set('views', __dirname + 'views');


app.get('/', (req, res) => {
    res.render('app', { title: 'Welcome', message: 'Dynamic content with Pug and Express!' });
  });

app.get('/items', (req, res) => {
    const items = ['Laptop', 'Smartphone', 'Tablet'];
    res.render('app', { items });
  });
  app.listen(PORT,()=>console.log('here'))
    