const mongoose = require('mongoose');  // requerir mongoose

mongoose.connect('mongodb://localhost/notes-db', { // donde esta almacenado
    useNewUrlParser: true,
    useFindAndModify: false
}) // funciones promesa cuando se conecte la base de datos
    .then(db => console.log ('DB IS CONNECTED'))
    .catch(err => console.error(err));