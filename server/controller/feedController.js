var feeditems= require('../model/feeditems')

var feeditem = [];

var feeditem1 = feeditems.feeditem('Marist story 1','Body 1', 'http://example.com/story1', 'images/campus.png');
var feeditem2 = feeditems.feeditem('Marist story 2','Body 2', 'https://example.com/story2', 'images/news_pic.jpg');
var feeditem3 = feeditems.feeditem('Marist story 3','Body 3', 'http://example/com/story3', 'images/hancock.jpeg');

feeditem.push(feeditem1);
feeditem.push(feeditem2);
feeditem.push(feeditem3);
 

exports.getfeeditem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(feeditem[req.params.feeditemId]);
}

exports.savefeeditem = function(req, res) {
	let newfeeditem = feeditem.createfeeditem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
	feeditem.push(newfeeditem);  
	res.setHeader('Content-Type', 'application/json');
	res.send(feeditem);
}

exports.getfeeditem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(feeditem[req.params.feeditemId]);
}

exports.deletefeeditem = function(req, res) {
	feeditems.splice(req.params.feeditemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feeditem);
}

exports.updatefeeditem= function(req, res) {
	// get the existing user from the array
	var updatedfeeditem = feeditem[req.params.feeditemId];
	// console.log(req.body.title);
	if(req.body.title)
		updatedfeeditem.title = req.body.title;
	if(req.body.lastName)
		updatedfeeditem.body =req.body.body;
	if(req.body.email)
		updatedfeeditem.linkUrl = req.body.linkUrl;
	if(req.body.password)
		updatedfeeditem.imageUrl = req.body.imageUrl;

	// save the local copy of the user back into the array
	feeditem[req.params.feeditemId] = updatedfeeditem;
 
	res.setHeader('Content-Type', 'application/json');
	res.send(feeditem[req.params.feeditemsId]);

}