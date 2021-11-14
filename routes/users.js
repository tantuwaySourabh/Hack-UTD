var express = require('express');
var router = express.Router();

var monk = require('monk');

var db = monk('localhost:27017/hackUTD');
var collection = db.get('user');
/* GET users listing. */
router.get('/', function(req, res, next) {
    collection.find({},function(err, users){
        if(err) throw err;
        res.json(users);
    })
});


router.get('/:id', function(req, res, next) {
  	collection.find({_id:req.params.id}, 
		function(err,user){
			if(err) throw err;
			res.json(user);
	});
});

router.post('/', function(req, res) {
  
	collection.insert({
		username: req.body.username,
		email: req.body.email,
		password : req.body.password,
		address : req.body.address,
		contactno : req.body.contactno,
		wishlist : req.body.wishlist,
		purchases : req.body.purchases,
		listing : req.body.listing
	},function(arr,user) {
		// body...
		if(err) throw err;
		res.json(user);
	});
});


router.put('/:id', function(req, res) {
  
collection.update({_id : req.params.id},  
	{$set : {
		username: req.body.username,
		email: req.body.email,
		password : req.body.password,
		address : req.body.address,
		contactno : req.body.contactno,
		wishlist : req.body.wishlist,
		purchases : req.body.purchases,
		listing : req.body.listing
	}},function(arr,user) {
		if(err) throw err;
		res.json(user);
	});
});

module.exports = router;
