const express = require('express');
const router = express.Router();
const conf = require('../../config');

const Ad = require('../models/Ad');
const Model = new Ad(conf.database);


router.get('/', async (req,res) => {
	if(!req.body) return;

})

/*)

router.post()

router.put()

router.delete()*/

module.exports = router;




