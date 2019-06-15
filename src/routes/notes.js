const router = require('express').Router();

router.get('/notes', (req, res) =>{
    res.send("Notes from data base");
}); 

module.exports = router;