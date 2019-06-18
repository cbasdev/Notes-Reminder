const express = require('express');
const path = require('path'); 
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Initializations

const app = express();

require('./database');
//Settings

app.set('port', process.env.PORT || 3000);

app.set('views',path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs'
}));

app.set ('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded({extended: false})); // sirve para cuando un formulario envie datos yo lo entienda

app.use(methodOverride('method')); //sirve para usar otros tipos de metodos ademas del get y psott

app.use(session({
    secret: 'aguacate',
    resave: true,
    saveUninitialized: true
}))

//Global Variables


//Routes

app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));



//Satic Files

app.use(express.static(path.join(__dirname, 'public')));

//Server Init

app.listen(app.get('port'), function(){

    console.log('Server on port ', app.get('port'));
});