const router = require('express').Router();

const Note = require('../models/Note'); //Modelo de base de datos

router.get('/notes/add', (req, res)=>{
    res.render('notes/new-note');

});

router.post('/notes/new-note', async (req, res) =>{
    const { tittle, description } = req.body;
    const errors= [];
    if(!tittle){
        errors.push({text: 'Please Write a Tittle'});
    }
    if(!description){
        errors.push({text: 'Please Write a description'});
    }

    if(errors.length>0){
        res.render('notes/new-note', {
           errors,
           tittle,
           description 
        });
    } else{

        //almacenar en la base de datos
        const newNote = new Note({tittle, description});
        await newNote.save(); //salvar esto en la base de datos es asincrono
        res.redirect('/notes');
    }
});

router.get('/notes', async (req, res) =>{
    const notes = await Note.find();
    res.render('notes/all-notes', {notes});
}); 

module.exports = router;