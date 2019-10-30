const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index.pug');
});

app.get('/cards', (req, res) => {
    res.locals.prompt = "Who is buried in Grant's tomb?";
    res.render('card.pug');
});

app.listen(3000, () => {
   console.log('The application is running on localhost:3000!') 
});