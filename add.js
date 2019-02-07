var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var name = request.query.name;
    var desc = request.query.description;
    var image = "http://lorempixel.com/400/400/people";
    var entry = {"name": name, "description": desc, "imageURL": image};
    
    console.log(entry);
    data.friends.push(entry);
    response.render('index', data);
 }