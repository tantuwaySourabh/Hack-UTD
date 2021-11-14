var express = require('express');
var router = express.Router();

var monk = require('monk');

var db = monk('localhost:27017/hackUTD');
var collection = db.get('chats');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/:id', function(req, res, next) {
  	collection.find({_id:req.params.id}, 
		function(err,chat){
			if(err) throw err;
			res.json(chat);
	});
});



module.exports = router;
