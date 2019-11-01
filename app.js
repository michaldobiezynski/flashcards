const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index.pug');
});

app.get('/cards', (req, res) => {
    // res.locals.prompt = "Who is buried in Grant's tomb?";
    res.render('card.pug', {prompt: "Who is buried in Grant's tomb?", 
    hint: "Think about whose tomb it is."});
});

app.get('/hello', (req, res) => {
    res.render('hello.pug');
})

app.post('/hello', (req, res) => {

    res.render('hello.pug', { name: req.body.username });
});

app.listen(3000, () => {
   console.log('The application is running on localhost:3000!') 
});