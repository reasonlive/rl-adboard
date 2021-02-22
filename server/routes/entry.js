const express = require('express');
const router = express.Router();

const conf = require('../../config');
const User = require('../models/User');

//creates object of database api
const Model = new User(conf.database)

router.get('/:act', async (req,res,next) => {

	if(req.params.act === 'checkAuth'){

		let auth = req.session.auth ? true : false;
		if(!auth)res.json({auth:false,data:null});
		else res.json({auth:true,data:req.session.user});

	}

	if(req.params.act === 'logout'){

		req.session.destroy(function(){
			console.log('session is destroyed!');

		});

		res.redirect('/');

	}

	next()
})


router.post('/:act', async (req,res,next) => {

	if(!req.body) return next()

	if(req.params.act === 'register'){

		try{
			let result = await Model.addUser(req.body);

			result > 0 ? res.json({success:true}) : res.json({success:false});

			return;

		}catch(e){return next(e)}

		
	}

	if(req.params.act === 'login'){
		
		let result = await Model.getUser(req.body)
	
		if(result instanceof Error) return next(result)
		if(result.length < 1) return next(new Error('NotFoundDataError'));
		
		delete result[0].password;

		req.session.auth = true;
		req.session.user = result[0];

		res.json({data: result[0], success: true})
	}
	
	
})





/*
router.post()

router.put()

router.delete()*/

module.exports = router;