const router = require('express').Router();

const Note = require('../models/Note'); //Modelo de base de datos

router.get('/notes/add', (req, res)=>{
    res.render('notes/new-note');

});

router.post('/notes/new-note', async (req, res) =>{
    const { title, description } = req.body;
    const errors= [];
    if(!title){
        errors.push({text: 'Please Write a title'});
    }
    if(!description){
        errors.push({text: 'Please Write a description'});
    }

    if(errors.length>0){
        res.render('notes/new-note', {
           errors,
           title,
           description 
        });
    } else{

        //almacenar en la base de datos
        const newNote = new Note({title, description});
        await newNote.save(); //salvar esto en la base de datos es asincrono
        req.flash('success_msg', 'Note Added Successfully');
        res.redirect('/notes');
    }
});

router.get('/notes', async (req, res) =>{
    const notes = await Note.find().sort({date: 'desc'}); //sort ordena de manera descendente
    res.render('notes/all-notes', {notes});
}); 

router.get('/notes/edit/:id', async (req, res)=>{
    const note = await Note.findById(req.params.id);
    res.render('notes/edit-note', {note});
});

router.put('/notes/edit-note/:id', async (req, res)=>{
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description});
    req.flash('success_msg', 'Note Updated Succesfly');
    res.redirect('/notes');
});

router.delete('/notes/delete/:id', async(req, res)=>{
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Deleted Succesfly');

    res.redirect('/notes');
});


module.exports = router;