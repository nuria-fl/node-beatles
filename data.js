var Beatles = function () {};

Beatles.prototype.members = [
	{
		name: 'John',
		birth: new Date('October 13, 1940'),
		dead: true
	},
	{
		name: 'Paul',
		birth: new Date('June 18, 1942'),
		dead: false
	},
	{
		name: 'George',
		birth: new Date('February 25, 1943'),
		dead: true
	},
	{
		name: 'Ringo',
		birth: new Date('July 7, 1940'),
		dead: false
	},
];

Beatles.prototype.getAge = function (member) {
	var birth = member.birth;
	var now = new Date();
	var age = now.getFullYear() - birth.getFullYear();
	if ((birth.getMonth() > now.getMonth()) || 
		(birth.getMonth() === now.getMonth() && birth.getDate() > now.getDate()) ){
		age--;
	}
	return age;
};

module.exports = new Beatles();