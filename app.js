var beatles = require('./data.js');
var dateFormat = require('dateformat');

beatles.members.forEach(function(elem,index){
	var age = beatles.getAge(beatles.members[index].birth);
	var birth = dateFormat(elem.birth, 'ddd mmm dd yyyy');
	var status = 'is ';
	if(elem.isDead === true ){
		var status = 'would be ';
	}
	console.log( elem.name + ' was born on ' + birth + ' and ' + status + age );
})