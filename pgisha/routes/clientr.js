var express = require('express');
var router = express.Router();
var client = require('../models/client')

router.post('/add', async (req, res) => {

let bodyclient=req.body.name;

   let usertosave = new client({name:bodyclient})
   let showsave=await usertosave.save();

   res.json(showsave)
});




module.exports = router