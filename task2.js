class User_ids {
    constructor(ID, name, age) {
      this.ID = ID;
      this.name = name;
      this.age = age;
    }
    sayHi() {
      alert(`Инфа о пользователе: ${this.ID}, ${this.name}, ${this.age}`);
    }
  }

let userList = [
    user1 = new User_ids(1, "Vladislav", 12),
    user2 = new User_ids(2, "Oleg", 33)
]

function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

getUser = async (ID_num) => {
   await sleep(2);
   return userList.find((element) => element.ID == ID_num);;
}

var main = async () =>{
  console.log(await getUser(1));
}



main();