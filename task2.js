class User {
  constructor(ID, name, age) {
    this.ID = ID;
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(`ID: ${this.ID} | Имя: ${this.name} | Возраст: ${this.age}`);
  }
}

let userList = [
  user1 = new User(1, "Vladislav", 12),
  user2 = new User(2, "Oleg", 33),
  user3 = new User(13, "Danila", 44),
  user4 = new User(1337, "Kiril", 23),
  user5 = new User(3, "Reimu", 18),
  user6 = new User(4, "Marisa", 14)
]

function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

getUser = async (ID_num) => {
   await sleep(1);
   console.log('Загружен пользователь с ID ' + ID_num);
   return userList.find((element) => element.ID == ID_num);
}

loadUsersSquentially = async (ID_list) => {
  const t0 = Date.now();
  let loadedUsers = [];
  for(let i = 0; i < ID_list.length; i++){
    loadedUsers.push(await getUser(ID_list[i]));
  }
  console.log(`Пользователи загружены за ${(Date.now() - t0) /1000} секунд`);
  console.log('Список пользователей:');
  for(let i = 0; i < loadedUsers.length; i++){
    loadedUsers[i].getInfo();
  }
  return loadedUsers;
}

loadUsersInParallel = async (ID_list) => {
  const t0 = Date.now();
  let loadedUsers = [];
  const promises = Array(ID_list.length).fill(null).map((_x, i) => getUser(ID_list[i]))
  for (const p of promises){
    loadedUsers.push(await p);
  }
  console.log(`Пользователи загружены за ${(Date.now() - t0) /1000} секунд`);
  console.log('Список пользователей:');
  for(let i = 0; i < loadedUsers.length; i++){
    loadedUsers[i].getInfo();
  }
  return loadedUsers;
}

let main = async () =>{ //создаем асинхронный main(), что бы можно было прописать await перед функциями с promise
 
  console.log(await getUser(1));  //Поиск одного пользователя с ID 1. 
  //На выходе из промиса получаем объект класса User
  
  let primeUsers = [1, 1337, 3];
  await loadUsersSquentially(primeUsers);//Поиск пользователей с ID, заданными в массиве primeUsers
  //Почередно запускаем getUser для каждого ID и записываем резолв из промиса в возвращаемый функцией массив объектов класса User
  
  await loadUsersInParallel(primeUsers);//Поиск пользователей с ID, заданными в массиве primeUsers
  //Параллельно запускаем getUser для каждого ID и записываем резолв из промиса в возвращаемый функцией массив объектов класса User
}

main();