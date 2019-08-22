const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.render('navigation.ejs');
});

router.get('/second',(req, res)=>{
    res.render('second.ejs');
})

router.get('/third',(req, res)=>{
    res.render('third.ejs');
})

module.exports = router;