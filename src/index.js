const express = require('express');
const morgan = require('morgan');
const path = require('path');
const hbs = require('express-handlebars');
const app = express();
const db = require('./config/data/db');
const coursesRouter = require('./routes/courses.router');
const methodOverride = require('method-override')
    // const mongoose_delete=require('mongoose-delete');
    // app use method override
app.use(methodOverride('_method'));
// body parser
// connet to mongoDB
db.connect();
// show loggor
app.use(morgan('combined'));
// get data from middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// set view with handlerbars 
app.engine('hbs', hbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
// use  coursesRouter for end point courses
app.use('/courses', coursesRouter);
//  home
app.get('/', (req, res) => {
    res.render('home');
})
const port = 4000;
app.listen(port, () => console.log(`Example app listen at http://localhost:${port}`));