class User {

  constructor(name, age, address) {
    this.name = name;
	this.age = age;
	this.address = address;
  }

  sayHi() {
	console.log("Инфа о пользователе: " + this.name + " " + this.age + " " + this.address);
  }
  
}


function getTotalAge(list){
	var totalAge = 0;
	for (let i = 0; i < list.length; i++){
		totalAge += list[i].age;
	}
return totalAge;
}

function getUsersStreets(list){
	var usersStreets = [];
	for (let i = 0; i < list.length; i++){
		usersStreets.push(list[i].address[1])
	}
return usersStreets;
}

function getOldPeople(list){
	var oldPeople = [];
	for (let i = 0; i < list.length; i++){
		if (list[i].age > 60){
		oldPeople.push(list[i]);
		}
	}
return oldPeople;
}

let Users = [
	user1 = new User("Миха", 13, ['Dolgoprudny', 'Molodejnaya', '14k3']),
	user1 = new User("Михаил", 69, ['Dolgoprudny', 'Molodejnaya', '14k3']),
	user1 = new User("Микелле", 180, ['Brasov', 'Strada Transilvaniei', '6']),
	user2 = new User("Лизон Пузон", 9, ['Lobnya', 'Vorovskaya street', '24'])
]


var totalAge = getTotalAge(Users);
console.log(totalAge);

var usersStreets = getUsersStreets(Users);
console.log(usersStreets);

var oldPeople = getOldPeople(Users);
for(let i = 0; i < oldPeople.length; i++){
	oldPeople[i].sayHi();
}
