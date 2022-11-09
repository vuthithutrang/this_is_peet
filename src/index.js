const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');
const bodyParser = require('body-parser');

const db = require('./src2/config/db');
const route = require('./src2/routes')
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'src2/public')));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//connect to db
db.connect();

//template enegin
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src2/resources/views'));

//Route init
route(app);

app.listen(port, () =>  console.log(`App listening on port http://localhost:${port}`))

