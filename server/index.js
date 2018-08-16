const config = require('config');
const Joi = require('joi');
const morgan = require('morgan');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');

const debug = require('debug')('app:debugger');

const app = express();

// app.set('viewn engine', 'pug');
// app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/', home);
app.use('/api/courses', courses);

// console.log(`Env: ${process.env.NODE_ENV}`);
// console.log(`App: ${app.get('env')}`);

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Debugging ...');
}

// debug('Do the work ...Web API with ExpressJs');
// //Configuration
// console.log('Application name: ' + config.get('name'));
// console.log('Mail Server ' + config.get('mail.host'));




const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listing on port ${port}...`));