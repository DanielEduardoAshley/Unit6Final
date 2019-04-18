const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { usersRouter } = require('./routes/users');
const { genresRouter } = require('./routes/genres');
const { showsRouter } = require('./routes/shows');
const { commentsRouter } = require('./routes/comments');



app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use('/users', usersRouter);
app.use('/genres', genresRouter);
app.use('/shows', showsRouter);
app.use('/comments', commentsRouter);







module.exports = { app }



