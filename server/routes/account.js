const express = require('express');
const router = express.Router();

const conf = require('../../config')
const User = require('../models/User');

//creates object of database api
const Model = new User(conf.database)



router.get('/', (req,res,next) => {

	if(!req.session.user){
		res.redirect('/login');
		next();
	}

	res.json({data: req.session.user});
	next();


})

router.post('/', (req,res,next) => {

	
})

router.put('/:act', async (req,res,next) => {

	const id = req.session.user.id;

	if(req.params.act === 'update'){

		try{
			/*do some actions*/
		}catch(e){return next(e)}

		return;
	}

	if(req.params.act === 'updateAds'){

		try{


		}catch(e){return next(e)}

		return;
	}

	if(req.params.act === 'toggleAds'){

		try{


		}catch(e){return next(e)}

		return;
	}



})

router.delete('/:item', async (req,res,next) => {

	const id = req.session.user.id;

	if(req.params.item === 'photo'){

		try{
			const result = await Model.deleteUserPhoto(id)
			if(result > 0)res.json({success:true});
			else return next(new Error('NotFoundError'));
		
		}catch(e){return next(e)}

		

		return;
		
	}

	if(req.params.item === 'account'){

		try{
			const result = await Model.deleteUser(id)
			if(result > 0)res.json({success:true});
			else return next(new Error('NotFoundError'));
		
		}catch(e){return next(e)}

		

		return;
	}

	//next();
})


module.exports = router;