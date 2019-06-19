const express = require('express'); // Framework para el manejo de Servidores
const path = require('path');  // The Path module provides a way of working with directories and file paths.
const exphbs = require('express-handlebars'); // Motor de plantillas para html en su forma lógica
const methodOverride = require('method-override'); //Permite usar verbos HTTP como PUT o DELETE en lugares donde el cliente no lo admite.
const session = require('express-session'); //Los datos de la sesión no se guardan en la cookie, solo el ID de la sesión. Los datos de la sesión se almacenan en el servidor.

//Initializations

const app = express(); //inicializa express

require('./database'); //inicialización de la base de datos

//Settings

app.set('port', process.env.PORT || 3000); //guardar en app el valor de 'port' = 3000

app.set('views',path.join(__dirname, 'views')); //definir donde está la carpeta views 

app.engine('.hbs', exphbs({ //definir que extensión van a tener las vistas
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs'
}));

app.set ('view engine', '.hbs'); //las vistas se guardan con extensión .hbs

//Middlewares
app.use(express.urlencoded({extended: false})); // sirve para cuando un formulario envie datos yo lo entienda

app.use(methodOverride('method')); //sirve para usar otros tipos de metodos ademas del get y post

app.use(session({ //pendiente
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
//la definicion mas completa es que los archivos estaticos son aquellos que no modifican su información nunca

app.use(express.static(path.join(__dirname, 'public')));

//Server Init

//inicializar el servidor 
app.listen(app.get('port'), function(){

    console.log('Server on port ', app.get('port'));
});