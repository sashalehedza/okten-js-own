// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

console.log('hello world'.length)
console.log('lorem ipsum'.length)
console.log('javascript is cool'.length)

console.log('hello world'.toUpperCase())
console.log('lorem ipsum'.toUpperCase())
console.log('javascript is cool'.toUpperCase())

console.log('HELLO WORLD'.toLowerCase())
console.log('LOREM IPSUM'.toLowerCase())
console.log('JAVASCRIPT IS COOL'.toLowerCase())

let str = ' dirty string   '
console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

str = 'Ревуть воли як ясла повні'

const stringToarray = (str) => {
  return str.split(' ')
}

console.log(stringToarray(str))

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let newArr = arr.map((item) => {
  return item.toString()
})
console.log(newArr)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const sortNums = (arr, direction) => {
  if (direction === 'ascending') {
    return arr.sort((a, b) => a - b)
  } else if (direction === 'descending') {
    return arr.sort((a, b) => b - a)
  }
}

let nums = [11, 21, 3]
console.log(sortNums(nums, 'ascending'))
console.log(sortNums(nums, 'descending'))

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
  { title: 'JavaScript Complex', monthDuration: 5 },
  { title: 'Java Complex', monthDuration: 6 },
  { title: 'Python Complex', monthDuration: 6 },
  { title: 'QA Complex', monthDuration: 4 },
  { title: 'FullStack', monthDuration: 7 },
  { title: 'Frontend', monthDuration: 4 },
]

let newCoursesAndDurationArray = coursesAndDurationArray
  .slice()
  .sort((a, b) => b.monthDuration - a.monthDuration)

console.log('monthDuration', newCoursesAndDurationArray)

newCoursesAndDurationArray = coursesAndDurationArray.filter(
  (item) => item.monthDuration > 5
)
console.log('monthDuration > 5', newCoursesAndDurationArray)

newCoursesAndDurationArray = coursesAndDurationArray.map((item, index) => {
  return {
    id: index,
    title: item.title,
    monthDuration: item.monthDuration,
  }
})

console.log('id title monthDuration', newCoursesAndDurationArray)

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
//    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//    color:'', // 'red','black'
// }

const deck = [
  { cardSuit: 'spade', value: '6', color: 'black' },
  { cardSuit: 'spade', value: '7', color: 'black' },
  { cardSuit: 'spade', value: '8', color: 'black' },
  { cardSuit: 'spade', value: '9', color: 'black' },
  { cardSuit: 'spade', value: '10', color: 'black' },
  { cardSuit: 'spade', value: 'jack', color: 'black' },
  { cardSuit: 'spade', value: 'queen', color: 'black' },
  { cardSuit: 'spade', value: 'king', color: 'black' },
  { cardSuit: 'spade', value: 'ace', color: 'black' },
  { cardSuit: 'diamond', value: '6', color: 'red' },
  { cardSuit: 'diamond', value: '7', color: 'red' },
  { cardSuit: 'diamond', value: '8', color: 'red' },
  { cardSuit: 'diamond', value: '9', color: 'red' },
  { cardSuit: 'diamond', value: '10', color: 'red' },
  { cardSuit: 'diamond', value: 'jack', color: 'red' },
  { cardSuit: 'diamond', value: 'queen', color: 'red' },
  { cardSuit: 'diamond', value: 'king', color: 'red' },
  { cardSuit: 'diamond', value: 'ace', color: 'red' },
  { cardSuit: 'heart', value: '6', color: 'red' },
  { cardSuit: 'heart', value: '7', color: 'red' },
  { cardSuit: 'heart', value: '8', color: 'red' },
  { cardSuit: 'heart', value: '9', color: 'red' },
  { cardSuit: 'heart', value: '10', color: 'red' },
  { cardSuit: 'heart', value: 'jack', color: 'red' },
  { cardSuit: 'heart', value: 'queen', color: 'red' },
  { cardSuit: 'heart', value: 'king', color: 'red' },
  { cardSuit: 'heart', value: 'ace', color: 'red' },
  { cardSuit: 'clubs', value: '6', color: 'black' },
  { cardSuit: 'clubs', value: '7', color: 'black' },
  { cardSuit: 'clubs', value: '8', color: 'black' },
  { cardSuit: 'clubs', value: '9', color: 'black' },
  { cardSuit: 'clubs', value: '10', color: 'black' },
  { cardSuit: 'clubs', value: 'jack', color: 'black' },
  { cardSuit: 'clubs', value: 'queen', color: 'black' },
  { cardSuit: 'clubs', value: 'king', color: 'black' },
  { cardSuit: 'clubs', value: 'ace', color: 'black' },
]

let findSpadeAce = deck.filter(
  (item) => item.cardSuit === 'spade' && item.value === 'ace'
)

console.log('findSpadeAce', findSpadeAce)

let findSixes = deck.filter((item) => item.value === '6')

console.log('findSixes', findSixes)

let findRedCards = deck.filter((item) => item.color === 'red')

console.log('findRedCards', findRedCards)

let findDiamonds = deck.filter((item) => item.cardSuit === 'diamond')

console.log('findDiamonds', findDiamonds)

let findClubsHigherThan9 = deck.filter((item) => {
  const numericValue = parseInt(item.value)
  return (
    item.cardSuit === 'clubs' &&
    ((!isNaN(numericValue) && numericValue >= 9) ||
      ['jack', 'queen', 'king', 'ace'].includes(item.value))
  )
})

console.log('findClubsHigherThan9', findClubsHigherThan9)

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
  {
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'node.js',
    ],
  },
  {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'git',
      'java core',
      'java advanced',
    ],
  },
  {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'python core',
      'python advanced',
    ],
  },
  {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC'],
  },
  {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'node.js',
      'python',
      'java',
    ],
  },
  {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      'html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'sass',
    ],
  },
]

//let sassCourses = coursesArray.filter((item) => item.modules.includes('sass'))

let sassCourses = coursesArray.filter((item) => {
  for (let module of item.modules) {
    if (module === 'sass') {
      return true
    }
  }
  return false
})

console.log('sassCourses', sassCourses)

// let dockerCourses = coursesArray.filter((item) =>
//   item.modules.includes('docker')
// )

let dockerCourses = coursesArray.filter((item) => {
  for (let module of item.modules) {
    if (module === 'docker') {
      return true
    }
  }
  return false
})

console.log('dockerCourses', dockerCourses)
