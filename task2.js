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

const userList = [
  new User(1, "Vladislav", 12),
  new User(2, "Oleg", 33),
  new User(13, "Danila", 44),
  new User(1337, "Kiril", 23),
  new User(3, "Reimu", 18),
  new User(4, "Marisa", 14)
]

function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

const getUser = async (ID_num) => {
   await sleep(1);
   console.log('Загружен пользователь с ID ' + ID_num);
   return userList.find((element) => element.ID == ID_num);
}

const loadUsersSquentially = async (ID_list) => {
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

/*const loadUsersInParallel = async (ID_list) => {
  const t1 = Date.now();
  let loadedUsers = [];
  const promises = Array(ID_list.length).fill(null).map((_x, i) => getUser(ID_list[i]))//поправить
  for (const p of promises){
    loadedUsers.push(await p);
  }//метод промисов
  console.log(`Пользователи загружены за ${(Date.now() - t1) /1000} секунд`);
  console.log('Список пользователей:');
  loadedUsers.forEach(element => element.getInfo())
  return loadedUsers;
}*/

const loadUsersInParallel_remake = async (ID_list) => {
  const t1 = Date.now();

  const promises = ID_list.map((_, i) => getUser(ID_list[i]))
  let loadedUsers = await Promise.all(promises);

  console.log(`Пользователи загружены за ${(Date.now() - t1) /1000} секунд`);
  console.log('Список пользователей:');
  loadedUsers.forEach(element => element.getInfo())
  return loadedUsers;
}

const main = async () =>{ //создаем асинхронный main(), что бы можно было прописать await перед функциями с promise
  const primeUsers = [1, 1337, 3];

  console.log(await getUser(1));  //Поиск одного пользователя с ID 1. 
  //На выходе из промиса получаем объект класса User
  
  await loadUsersSquentially(primeUsers);//Поиск пользователей с ID, заданными в массиве primeUsers
  //Почередно запускаем getUser для каждого ID и записываем резолв из промиса в возвращаемый функцией массив объектов класса User
  
  await loadUsersInParallel_remake(primeUsers);//Поиск пользователей с ID, заданными в массиве primeUsers
  //Параллельно запускаем getUser для каждого ID и записываем резолв из промиса в возвращаемый функцией массив объектов класса User
}

main();