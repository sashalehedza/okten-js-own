// // --створити масив з:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль

let numbers = [1, 2, 3, 4, 5]
let strings = ['a', 'b', 'c', 'd', 'e']
let random = [1, 'a', true, 2, 'b', false, 3, 'c', true, 4, 'd', false, 5, 'e']

console.log('numbers', numbers)
for (let item of numbers) {
  console.log(item)
}
console.log('strings', strings)
for (let item of strings) {
  console.log(item)
}
console.log('random', random)
for (let item of random) {
  console.log(item)
}

// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

const emptyArray = []
emptyArray[0] = 1
emptyArray[1] = 'a'
emptyArray[2] = true
console.log(emptyArray)

// // - є масив [2,17,13,6,22,31,45,66,100,-18] :
// // 1. перебрати його циклом while
// // 2. перебрати його циклом for
// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// // 7. замінити кожне число кратне 3 на слово "okten"
// // 8. вивести масив в зворотньому порядку.
// // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]

console.log('1 while')
let i = 0
do {
  console.log(arr[i])
  i++
} while (i < arr.length)

console.log('2 for')
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

console.log('3 while with odd index')
i = 0
do {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i])
  }
  i++
} while (i < arr.length)

console.log('4 for with odd index')
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i])
  }
}

console.log('5 while with even index')
i = 0
do {
  if (arr[i] % 2 === 0) {
    console.log(arr[i])
  }
  i++
} while (i < arr.length)

console.log('6 for with even index')
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i])
  }
}

console.log('7 while with okten')
do {
  if (arr[i] % 3 === 0) {
    arr[i] = 'okten'
  }
  i++
} while (i < arr.length)
console.log(arr)

console.log('7 for with okten')
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    arr[i] = 'okten'
  }
}
console.log(arr)

console.log('8 reverse for')
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i])
}

console.log('8 reverse while')
i = arr.length - 1
while (i >= 0) {
  console.log(arr[i])
  i--
}

console.log('8 reverse do while')

i = arr.length - 1
do {
  console.log(arr[i])
  i--
} while (i >= 0)

console.log('1 while reverse')
i = arr.length - 1
do {
  console.log(arr[i])
  i--
} while (i >= 0)

console.log('2 for reverse')
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i])
}

console.log('3 while with odd index reverse')
i = arr.length - 1
do {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i])
  }
  i--
} while (i >= 0)

console.log('4 for with odd index reverse')
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i])
  }
}

console.log('5 while with even index reverse')
i = arr.length - 1
do {
  if (arr[i] % 2 === 0) {
    console.log(arr[i])
  }
  i--
} while (i >= 0)

console.log('6 for with even index reverse')
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i])
  }
}

console.log('7 while with okten reverse')
i = arr.length - 1
do {
  if (arr[i] % 3 === 0) {
    arr[i] = 'okten'
  }
  i--
} while (i >= 0)
console.log(arr)

console.log('7 for with okten reverse')
i = arr.length - 1
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] % 3 === 0) {
    arr[i] = 'okten'
  }
}
console.log(arr)

// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let item of numbers1) {
  console.log(item)
}

let strings2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

for (let item of strings2) {
  console.log(item)
}

let random2 = [1, 'a', true, 2, 'b', false, 3, 'c', true, 4]

for (let item of random2) {
  console.log(item)
}

let random3 = [1, 'a', true, 2, 'b', false, 3, 'c', true, 4]

for (let item of random3) {
  if (typeof item === 'boolean') {
    console.log(item)
  }
}
for (let item of random3) {
  if (typeof item === 'number') {
    console.log(item)
  }
}
for (let item of random3) {
  if (typeof item === 'string') {
    console.log(item)
  }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

let array = []
array[0] = 42
array[1] = 'Hello, world!'
array[2] = true
array[3] = { key: 'value' }
array[4] = [1, 2, 3]
array[5] = null
array[6] = 'hello'
array[7] = 'haha'
array[8] = 20
array[9] = 10
for (let item of array) {
  console.log(item)
}

for (let i = 0; i < 10; i++) {
  console.log(i)
  document.write(i)
}

for (let i = 0; i < 100; i++) {
  console.log(i)
  document.write(i)
}

for (let i = 0; i < 100; i += 2) {
  console.log(i)
  document.write(i)
}

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(i)
    document.write(i)
  }
}

for (let i = 0; i < 100; i++) {
  if (i % 2 !== 0) {
    console.log(i)
    document.write(i)
  }
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

let books = [
  {
    id: 1,
    name: 'book1',
    pages: 300,
    authors: [{ id: 1, name: 'author1' }],
    genres: [{ id: 1, name: 'genre1' }],
  },
  {
    id: 2,
    name: 'book2',
    pages: 200,
    authors: [
      { id: 3, name: 'author3' },
      { id: 4, name: 'author4' },
    ],
    genres: [
      {
        id: 3,
        name: 'genre3',
      },
    ],
  },
  {
    id: 3,
    name: 'book33',
    pages: 300,
    authors: [{ id: 3, name: 'author3' }],
    genres: [
      {
        id: 3,
        name: 'genre3',
      },
      {
        id: 4,
        name: 'genre4',
      },
    ],
  },
]

// -знайти наібльшу книжку/ки.
let biggestPagesBooks = []
let biggestPagesBook = books[0]
let maxPagesCount = 0

// for (let i = 0; i < books.length; i++) {
//   if (books[i].pages > biggestPagesBook.pages) {
//     biggestPagesBook = books[i]
//   }
// }

// for (let i = 0; i < books.length; i++) {
//   if (books[i].pages === biggestPagesBook.pages) {
//     biggestPagesBooks[biggestPagesBooks.length] = books[i]
//   }
// }

for (let book of books) {
  if (book.pages > maxPagesCount) {
    maxPagesCount = book.pages
    biggestPagesBooks = [book]
  } else if (book.pages === maxPagesCount) {
    biggestPagesBooks[biggestPagesBooks.length] = book
  }
}

console.log('biggestPagesBooks', biggestPagesBooks)

// - знайти книжку/ки з найбільшою кількістю жанрів

let biggestGenresBooks = []
let biggestGenresBook = books[0]
let maxGenresCount = 0

// for (let i = 0; i < books.length; i++) {
//   if (books[i].genres.length > biggestGenresBook.genres.length) {
//     biggestGenresBook = books[i]
//   }
// }
// for (let i = 0; i < books.length; i++) {
//   if (books[i].genres.length === biggestGenresBook.genres.length) {
//     biggestGenresBooks[biggestGenresBooks.length] = books[i]
//   }
// }

for (let book of books) {
  if (book.genres.length > maxGenresCount) {
    maxGenresCount = book.genres.length
    biggestGenresBooks = [book]
  } else if (book.genres.length === maxGenresCount) {
    biggestGenresBooks[biggestGenresBooks.length] = book
  }
}

console.log('biggestGenresBooks', biggestGenresBooks)

// - - знайти книжку/ки з найдовшою назвою

let biggestNameBooks = []
let biggestNameBook = books[0]
let maxNameLenght = 0

// for (let i = 0; i < books.length; i++) {
//   if (books[i].name.length > biggestNameBook.name.length) {
//     biggestNameBook = books[i]
//   }
// }
// for (let i = 0; i < books.length; i++) {
//   if (books[i].name.length === biggestNameBook.name.length) {
//     biggestNameBooks[biggestNameBooks.length] = books[i]
//   }
// }

for (let book of books) {
  if (book.name.length > maxNameLenght) {
    maxNameLenght = book.name.length
    biggestNameBooks = [book]
  } else if (book.name.length === maxNameLenght) {
    biggestNameBooks[biggestNameBooks.length] = book
  }
}
console.log('biggestNameBooks', biggestNameBooks)

// // - - знайти книжку/ки які писали 2 автори

let twoAuthorsBooks = []
for (let i = 0; i < books.length; i++) {
  if (books[i].authors.length === 2) {
    twoAuthorsBooks[twoAuthorsBooks.length] = books[i]
  }
}
console.log('twoAuthorsBooks', twoAuthorsBooks)

// // - - знайти книжку/ки які писав 1 автор
let oneAuthorBooks = []
for (let i = 0; i < books.length; i++) {
  if (books[i].authors.length === 1) {
    oneAuthorBooks[oneAuthorBooks.length] = books[i]
  }
}
console.log('oneAuthorBooks', oneAuthorBooks)
