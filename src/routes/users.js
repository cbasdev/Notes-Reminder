const router = require('express').Router();

router.get('/users/signin', (req, res) =>{
    res.send("Ingresando a la APP");
});

router.get('/users/signup', (req, res) =>{
    res.send("Formulario de autentcacion");
});

module.exports = router;