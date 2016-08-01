var Beatles = function () {};

function Beatle(name, birthDate, dead){
	this.name = name;
	this.birth = new Date(birthDate);
	this.isDead = dead;
}

Beatles.prototype.members = [
	new Beatle('John', 'October 9, 1940', true),
	new Beatle('Paul', 'June 18, 1942', false),
	new Beatle('George', 'February 25, 1943', true),
	new Beatle('Ringo', 'July 7, 1940', false),
];

Beatles.prototype.getAge = function (birthDate) {
	var now = new Date();
	var age = now.getFullYear() - birthDate.getFullYear();
	if ((birthDate.getMonth() > now.getMonth()) || 
		(birthDate.getMonth() === now.getMonth() && birthDate.getDate() > now.getDate()) ){
		age--;
	}
	return age;
};

module.exports = new Beatles();