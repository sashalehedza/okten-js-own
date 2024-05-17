// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User(id, name, surname, email, phone) {
  this.id = id
  this.name = name
  this.surname = surname
  this.email = email
  this.phone = phone
}

let users = []
for (let i = 0; i < 10; i++) {
  let id = Math.floor(Math.random() * 1000)
  users.push(
    new User(
      id,
      'Name' + id,
      'Surname' + id,
      'email' + id + '@example.com',
      '123456789' + id
    )
  )
}

console.log('users', users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = users.filter((user) => user.id % 2 === 0)

console.log('filteredUsers', filteredUsers)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = users.slice().sort((a, b) => a.id - b.id)
console.log('sortedUsers', sortedUsers)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.order = order
  }
}

let clients = []
for (let i = 0; i < 10; i++) {
  let id = Math.floor(Math.random() * 1000)
  let randomOrderArray = []
  let randomOrderArrayCount = Math.floor(Math.random() * 5 + 1)
  for (let j = 0; j < randomOrderArrayCount; j++) {
    randomOrderArray[j] = {
      id: Math.floor(Math.random() * 1000),
      name: 'product name' + Math.floor(Math.random() * 1000),
    }
  }
  clients.push(
    new Client(
      id,
      'Name' + id,
      'Surname' + id,
      'email' + id + '@example.com',
      '123456789' + id,
      randomOrderArray
    )
  )
}

console.log('clients', clients)

let sortedClients = clients
  .slice()
  .sort((a, b) => a.order.length - b.order.length)

console.log('sortedClients', sortedClients)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
  this.model = model
  this.manufacturer = manufacturer
  this.year = year
  this.maxSpeed = maxSpeed
  this.engineVolume = engineVolume
  this.driver = []

  this.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
  }

  this.info = function () {
    for (let prop in this) {
      if (typeof this[prop] !== 'function') {
        console.log(`${prop} - ${this[prop]}`)
      }
    }
  }

  this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed += newSpeed
  }

  this.changeYear = function (newValue) {
    this.year = newValue
  }

  this.addDriver = function (driver) {
    this.driver = [...this.driver, driver]
  }
}

let myCar = new Car('Civic', 'Honda', 2022, 200, 1.5)

myCar.drive()
myCar.info()
myCar.increaseMaxSpeed(50)
myCar.changeYear(2023)
myCar.addDriver({ name: 'Artem', age: 30 })

console.log(myCar)

// - (Те саме, тільки через клас)
class CarClass {
  constructor(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model
    this.manufacturer = manufacturer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineVolume = engineVolume
    this.driver = []
  }

  drive() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
  }

  info() {
    for (let prop in this) {
      if (typeof this[prop] !== 'function') {
        console.log(`${prop} - ${this[prop]}`)
      }
    }
  }

  increaseMaxSpeed(newSpeed) {
    this.maxSpeed += newSpeed
  }

  changeYear(newValue) {
    this.year = newValue
  }

  addDriver(driver) {
    this.driver = [...this.driver, driver]
  }
}

let myCarClass = new CarClass('Civic', 'Honda', 2022, 200, 1.5)

myCarClass.drive()
myCarClass.info()
myCarClass.increaseMaxSpeed(50)
myCarClass.changeYear(2023)
myCarClass.addDriver({ name: 'Artem', age: 30 })
myCarClass.addDriver({ name: 'Sasha', age: 22 })

console.log('myCarClass', myCarClass)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Princess {
  constructor(name, age, footSize) {
    this.name = name
    this.age = age
    this.footSize = footSize
  }
}

let myPrincesses = [
  new Princess('Anna', 22, 35),
  new Princess('Olga', 18, 38),
  new Princess('Natalia', 20, 37),
  new Princess('Elena', 19, 36),
  new Princess('Lena', 21, 39),
  new Princess('Olga', 18, 38),
  new Princess('Natalia', 20, 37),
  new Princess('Elena', 19, 36),
  new Princess('Lena', 21, 39),
  new Princess('Olga', 18, 38),
]

class Prince {
  constructor(name, age, shoesSize) {
    this.name = name
    this.age = age
    this.shoesSize = shoesSize
  }
}

let myPrince = new Prince('Petro', 20, 39)

for (let i = 0; i < myPrincesses.length; i++) {
  if (myPrincesses[i].footSize === myPrince.shoesSize) {
    console.log(myPrincesses[i])
    break
  }
}

console.log(
  myPrincesses.find((princess) => princess.footSize === myPrince.shoesSize)
)

// Через Array.prototype. створити власний foreach, filter, map

Array.prototype.myForEach = function (callback) {
  for (let item of this) {
    callback(item)
  }
}

Array.prototype.myFilter = function (callback) {
  let arr = []
  for (let item of this) {
    if (callback(item)) {
      arr.push(callback(item))
    }
  }
  return arr
}

Array.prototype.myMap = function (callback) {
  let arr = []
  for (let item of this) {
    // arr[arr.length] = callback(item)
    arr.push(callback(item))
  }
  return arr
}

console.log('myForEach')
myPrincesses.myForEach((princess) => console.log(princess))

let filteredPrincesses = myPrincesses.myFilter((princess) => {
  return princess.footSize === myPrince.shoesSize
})

console.log('myFilter filteredPrincesses', filteredPrincesses)

let mappedPrincesses = myPrincesses.myMap((princess) => {
  return `${princess.name} - ${princess.footSize}`
})

console.log('myMap mappedPrincesses', mappedPrincesses)
