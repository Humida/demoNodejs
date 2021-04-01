const express = require('express');
const morgan = require('morgan');
const path = require('path');
const hbs = require('express-handlebars');
const app = express();
const db = require('./config/db/index');

const user_router = require('./routes/user.router');

// connet to db
db.connect();
app.use(express.static(path.join(__dirname, 'public')));
// logger
app.use(morgan('combined'));

app.engine('hbs', hbs({ extname: '.hbs' }));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resource/views'));

const port = 4000;

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('search');
    console.log(req.query.q);
})

app.get('/search', (req, res) => {
    res.render('search');
})


// router

app.use('/user', user_router);

app.listen(port, () => console.log(`Example app listen at http://localhost:${port}`));