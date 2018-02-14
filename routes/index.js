const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const onlyMe = require('../middlewares/onlyMe');
const places = require('../bin/seeds');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/map',(req,res)=>{
  res.render('map',{places});
})

module.exports = router;
