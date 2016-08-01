var beatles = require('./data.js');
var dateFormat = require('dateformat');

beatles.members.forEach(function(elem,index){
	var age = beatles.getAge(beatles.members[index]);
	var status = 'is ';
	var birth = dateFormat(elem.birth, 'ddd mmm dd yyyy');
	if(elem.dead === true ){
		var status = 'would be ';
	}
	console.log( elem.name + ' was born on ' + birth + ' and ' + status + age );
})