let express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    res.render('home');
});

router.get('/apropos', (req, res) =>{
    res.render('apropos');
});

router.get('/domaine', (req, res) =>{
    res.render('domaine');
});

router.get('/publication', (req, res) =>{
    res.render('publication');
});

router.get('/rejoindre', (req, res) =>{
    res.render('rejoindre');
});

router.get('/contact', (req, res) =>{
    res.render('contact');
});

module.exports = router;