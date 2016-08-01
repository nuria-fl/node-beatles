var beatles = require('./data.js');

beatles.members.forEach(function(elem,index){
	var age = beatles.getAge(beatles.members[index]);
	var status = ' is ';
	if(elem.dead === true ){
		var status = ' would be ';
	}
	console.log( elem.name + status + age );
})