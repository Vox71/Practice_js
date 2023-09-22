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

async function sleep(seconds) {
    return new Promise((resolve, reject) => {
        if(typeof seconds == 'number'){
        setTimeout(() => {
            resolve();
        }, seconds*1000);}
        else{
            reject(new Error("Ошибка: " + seconds + " не является числовым типом"));
        }
      });
    /*promise.then(
    result => {
      console.log(result);
    },
    error => {
      console.log(error);
    }
  );*/
}

async function getUser(ID_num){
    try{ 
        const Promise = sleep(3.18);
        await Promise;
        return userList.find((element) => element.ID == ID_num);
    }
    catch (err){
        throw err;}
    
}

console.log(getUser(2)
    .then()

);


