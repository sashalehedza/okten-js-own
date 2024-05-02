// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const arrayOfRandoms = [
  { id: 1, name: 'sasha', surname: 'lehedza' },
  10,
  'hello',
  true,
  [1, 2, 3],
  'random',
  null,
  1,
  {
    id: 1,
    books: [
      { id: 1, title: 'book1', pageCount: 100 },
      { id: 2, title: 'book2', pageCount: 200 },
    ],
  },
  false,
]

console.log(arrayOfRandoms[0])
console.log(arrayOfRandoms[1])
console.log(arrayOfRandoms[2])
console.log(arrayOfRandoms[3])
console.log(arrayOfRandoms[4])
console.log(arrayOfRandoms[5])
console.log(arrayOfRandoms[6])
console.log(arrayOfRandoms[7])
console.log(arrayOfRandoms[8])
console.log(arrayOfRandoms[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const book1 = {
  title: 'book1',
  pageCount: 100,
  genre: 'horror',
}

const book2 = {
  title: 'book2',
  pageCount: 200,
  genre: 'comedy',
}

const book3 = {
  title: 'book3',
  pageCount: 300,
  genre: 'drama',
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

const book1WithAuthors = {
  id: 1,
  title: 'book1',
  pageCount: 100,
  genre: 'horror',
  authors: [
    {
      id: 1,
      name: 'author1',
      age: 20,
    },
    {
      id: 2,
      name: 'author2',
      age: 30,
    },
    {
      id: 3,
      name: 'author3',
      age: 40,
    },
  ],
}

const book2WithAuthors = {
  id: 2,
  title: 'book2',
  pageCount: 200,
  genre: 'comedy',
  authors: [
    {
      id: 3,
      name: 'author3',
      age: 40,
    },
    {
      id: 4,
      name: 'author4',
      age: 50,
    },
  ],
}

const book3WithAuthors = {
  id: 3,
  title: 'book3',
  pageCount: 300,
  genre: 'drama',
  authors: [
    {
      id: 1,
      name: 'author1',
      age: 60,
    },
    {
      id: 6,
      name: 'author6',
      age: 70,
    },
  ],
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const users = [
  {
    id: 1,
    name: 'sasha',
    username: 'sasha',
    password: '123',
  },
  {
    id: 2,
    name: 'vasya',
    username: 'vasya',
    password: '456',
  },
  {
    id: 3,
    name: 'petya',
    username: 'petya',
    password: '789',
  },
  {
    id: 4,
    name: 'kolya',
    username: 'kolya',
    password: '000',
  },
  {
    id: 5,
    name: 'olya',
    username: 'olya',
    password: '111',
  },
  {
    id: 6,
    name: 'masha',
    username: 'masha',
    password: '222',
  },
  {
    id: 7,
    name: 'dasha',
    username: 'dasha',
    password: '333',
  },
  {
    id: 8,
    name: 'kasha',
    username: 'kasha',
    password: '444',
  },
  {
    id: 9,
    name: 'lasha',
    username: 'lasha',
    password: '555',
  },
  {
    id: 10,
    name: 'fasha',
    username: 'fasha',
    password: '666',
  },
]

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
const temperatures = [
  {
    id: 1,
    day: '02/05/2024',
    temperatures: [
      {
        id: 1,
        name: 'morning',
        value: 17,
      },
      {
        id: 2,
        name: 'day',
        value: 18,
      },
      {
        id: 3,
        name: 'evening',
        value: 19,
      },
    ],
  },
  {
    id: 2,
    day: '03/05/2024',
    temperatures: [
      {
        id: 1,
        name: 'morning',
        value: 20,
      },
      {
        id: 2,
        name: 'day',
        value: 21,
      },
      {
        id: 3,
        name: 'evening',
        value: 22,
      },
    ],
  },
  {
    id: 3,
    day: '04/05/2024',
    temperatures: [
      {
        id: 1,
        name: 'morning',
        value: 23,
      },
      {
        id: 2,
        name: 'day',
        value: 24,
      },
      {
        id: 3,
        name: 'evening',
        value: 25,
      },
    ],
  },
  {
    id: 4,
    day: '05/05/2024',
    temperatures: [
      {
        id: 1,
        name: 'morning',
        value: 26,
      },
      {
        id: 2,
        name: 'day',
        value: 27,
      },
      {
        id: 3,
        name: 'evening',
        value: 28,
      },
    ],
  },
  {
    id: 5,
    day: '06/05/2024',
    temperatures: [
      {
        id: 1,
        name: 'morning',
        value: 29,
      },
      {
        id: 2,
        name: 'day',
        value: 30,
      },
      {
        id: 3,
        name: 'evening',
        value: 31,
      },
    ],
  },
  {
    id: 6,
    day: '07/05/2024',
    temperatures: [
      {
        id: 1,
        name: 'morning',
        value: 32,
      },
      {
        id: 2,
        name: 'day',
        value: 33,
      },
      {
        id: 3,
        name: 'evening',
        value: 34,
      },
    ],
  },
  {
    id: 7,
    day: '08/05/2024',
    temperatures: [
      {
        id: 1,
        name: 'morning',
        value: 35,
      },
      {
        id: 2,
        name: 'day',
        value: 36,
      },
      {
        id: 3,
        name: 'evening',
        value: 37,
      },
    ],
  },
]

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

const x = 10

if (x !== 0) {
  console.log('Вірно')
} else {
  console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
const time = 45
if (time >= 0 && time < 15) {
  console.log('1 чверть')
} else if (time >= 15 && time < 30) {
  console.log('2 чверть')
} else if (time >= 30 && time < 45) {
  console.log('3 чверть')
} else if (time >= 45 && time < 60) {
  console.log('4 чверть')
} else {
  console.log('not correct time')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
const day = 15
if (day >= 1 && day < 11) {
  console.log('1 декада')
} else if (day >= 11 && day < 21) {
  console.log('2 декада')
} else if (day >= 21 && day < 31) {
  console.log('3 декада')
} else {
  console.log('not correct day')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

const dayNumber = +prompt('Enter day number')
switch (dayNumber) {
  case 1:
    console.log('Monday: study, walk, sleep')
    break
  case 2:
    console.log('Tuesday: study, walk, sleep')
    break
  case 3:
    console.log('Wednesday: study, walk, sleep')
    break
  case 4:
    console.log('Thursday: study, walk, sleep')
    break
  case 5:
    console.log('Friday: study, walk, sleep')
    break
  case 6:
    console.log('Saturday: study, walk, sleep')
    break
  case 7:
    console.log('Sunday: study, walk, sleep')
    break
  default:
    console.log('not correct day number')
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
const a = +prompt('Enter first number')
const b = +prompt('Enter second number')

if (a > b) {
  console.log(a)
} else if (a < b) {
  console.log(b)
} else {
  console.log('numbers are equal')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let randomTypeValue = prompt('Enter value')

if (!!randomTypeValue) {
  randomTypeValue = 'default'
  console.log(randomTypeValue)
} else {
  console.log(randomTypeValue)
}

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
  { title: 'JavaScript Complex', monthDuration: 5 },
  { title: 'Java Complex', monthDuration: 6 },
  { title: 'Python Complex', monthDuration: 6 },
  { title: 'QA Complex', monthDuration: 4 },
  { title: 'FullStack', monthDuration: 7 },
  { title: 'Frontend', monthDuration: 4 },
]

if (coursesAndDurationArray[0].monthDuration > 5) {
  console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
  console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
  console.log('Супер')
}

if (coursesAndDurationArray[3].monthDuration > 5) {
  console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
  console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
  console.log('Супер')
}
