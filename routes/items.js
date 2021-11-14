var express = require('express');
var router = express.Router();

var monk = require('monk');

var db = monk('localhost:27017/hackUTD');
var collection = db.get('items');

/* GET home page. */
router.get('/:id', function(req, res, next) {
  	collection.find({_id:req.params.id}, 
		function(err,items){
			if(err) throw err;
			res.json(items);
	});
});


router.get('/', function(req, res, next) {
    collection.find({},function(err, items){
        if(err) throw err;
        res.json(items);
    })
});

router.post('/', function(req, res) {
  
	collection.insert({
		itemname: req.body.itemname,
		description: req.body.description,
		category : req.body.category,
		msp : req.body.msp,
		sellprice : req.body.sellprice,
		isnegotiable : req.body.isnegotiable,
		pickuplocation : req.body.pickuplocation,
		buydate : req.body.buydate,
		postdate : req.body.postdate,
		condition : req.body.condition,
		availabilitytill: req.body.availabilitytill,
		media: req.body.media,
		status: req.body.status
	},function(arr,item) {
		// body...
		if(err) throw err;
		res.json(item);
	});
});

router.put('/:id', function(req, res) {
  
collection.update({_id : req.params.id},  
	{$set : {
		itemname: req.body.itemname,
		description: req.body.description,
		category : req.body.category,
		msp : req.body.msp,
		sellprice : req.body.sellprice,
		isnegotiable : req.body.isnegotiable,
		pickuplocation : req.body.pickuplocation,
		buydate : req.body.buydate,
		postdate : req.body.postdate,
		condition : req.body.condition,
		availabilitytill: req.body.availabilitytill,
		media: req.body.media,
		status: req.body.status
	}},function(arr,item) {
		if(err) throw err;
		res.json(item);
	});
});

module.exports = router;
