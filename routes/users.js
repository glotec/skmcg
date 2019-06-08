let express = require('express');

const router = express.Router();

router.get('/apropos', (req, res) =>{
    res.render('apropos');
});

router.get('/domaine', (req, res) =>{
    res.send('domaine');
});

router.get('/publication', (req, res) =>{
    res.send('publication');
});

router.get('/rejoindre', (req, res) =>{
    res.send('rejoindre');
});

router.get('/contact', (req, res) =>{
    res.send('contact');
});

module.exports = router;