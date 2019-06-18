const router = require('express').Router();

router.get('/notes/add', (req, res)=>{
    res.render('notes/new-note');

});

router.post('/notes/new-note', (req, res) =>{
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
        res.send('ok');
    }
});

router.get('/notes', (req, res) =>{
    res.send("Notes from data base");
}); 

module.exports = router;