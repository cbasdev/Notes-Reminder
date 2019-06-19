const mongoose = require('mongoose');


const { Schema } = mongoose; // Solo quiero el esquema de mongoose 

// QUE PROPIEDAD VA A TENER MIS NOTAS 

// EL SCHEMA ES UNA CLASE 

//Basicamente es la estructura de la base de datos
const NoteSchema = new Schema({ 
    tittle: { type: String, required: true},
    description: { type: String, required: true},
    date: {type: Date, default: Date.now}
});

//Para exportar el modelo necesito dos cosas, la nota y el esquema 
module.exports = mongoose.model('Note', NoteSchema);