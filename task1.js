class User {
  constructor(name, age, city, street, house) {
    this.name = name;
	this.age = age;
	this.city = city;
	this.street = street;
	this.house = house;
	}
  getInfo() {
	console.log(`Имя: ${this.name} | Возраст: ${this.age} | Адрес: ${this.city}, ${this.street}, ${this.house}`);
  }
}

/*function getTotalAge(list){
	let totalAge = 0;
	for (let i = 0; i < list.length; i++){
		totalAge += list[i].age;
	}
	return totalAge;
}*/

function getTotalAge_remake(list){
	let totalAge = 0;
	list.forEach(element => totalAge+=element.age);
	return totalAge;
}

/*function getUsersStreets(list){
	const usersStreets = [];
	for (let i = 0; i < list.length; i++){
		usersStreets.push(list[i].street)
	}
	return usersStreets;
}*/

function getUsersStreets_remake(list){
	const usersStreets = list.map(element=>element.street);
	return usersStreets;
}

/*function getOldPeople(list){
	let oldPeople = [];
	for (let i = 0; i < list.length; i++){
		if (list[i].age > 60){
		oldPeople.push(list[i]);
		}
	}
	return oldPeople;
}*/

function getOldPeople_remake(list){
	const oldPeople = list.filter(element => element.age > 60);
	return oldPeople;
}

const Users = [
	new User("Миха", 13, 'Dolgoprudny', 'Molodejnaya', '14k3'),
	new User("Михаил", 69, 'Dolgoprudny', 'Molodejnaya', '14k3'),
	new User("Микелле", 180, 'Brasov', 'Strada Transilvaniei', '6'),
	new User("Лизон Пузон", 9, 'Lobnya', 'Vorovskaya street', '24')
]

/*var totalAge = getTotalAge(Users); 
console.log(totalAge);*/
/*getTotalAge проходится в цикле по всем объектам 
  в переданном массиве и суммирует Age*/

const totalAge_test = getTotalAge_remake(Users); 
console.log(totalAge_test);

/*var usersStreets = getUsersStreets(Users); 
console.log(usersStreets);*/

const usersStreets_test = getUsersStreets_remake(Users); 
console.log(usersStreets_test);
/*getUserStreets в цикле записывает в возвращаемый 
  массив все названия улиц (находится в User.address[1])*/

/*var oldPeople = getOldPeople(Users);
for(let i = 0; i < oldPeople.length; i++){
	oldPeople[i].getInfo();
}*/

const oldPeople_test = getOldPeople_remake(Users);
oldPeople_test.forEach(element => element.getInfo())
/*getOldPeople запускает цикл, в котором проверяются все объекты в 
переданном массиве, и если .age > 60, то передает этот объект в вохвращаемый массив*/