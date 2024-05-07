// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

document.write(
  `<div><h3>За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині</h3></div>`
)
for (let i = 0; i < 10; i++) {
  document.write(`<div>Довільний текст</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

document.write(
  `<div><h3>За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині</h3></div>`
)
for (let i = 0; i < 10; i++) {
  document.write(`<div>${i} Довільний текст</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

document.write(
  `<div><h3>За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.</h3></div>`
)

let i = 0
while (i < 20) {
  document.write(`<div>Довільний текст</в>`)
  i++
}

// let i = 0
// do {
//   document.write(`<h1>Довільний текст</h1>`)
//   i++
// } while (i < 20)

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

document.write(
  `<div><h3>За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.</h3></div>`
)

i = 0
while (i < 20) {
  document.write(`<div>${i} Довільний текст</div>`)
  i++
}

// i = 0
// do {
//   document.write(`<div>${i} Довільний текст</div>`)
//   i2++
// } while (i2 < 20)

//   - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>

// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

document.write(
  `<div><h3>Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону (lessons)</h3></div>`
)

let listOfItems = [
  'html',
  'css',
  'javascript',
  'mysql',
  'mongodb',
  'react',
  'angular',
  'node.js',
]

document.write(`<ul>`)
for (const item of listOfItems) {
  document.write(`<li>${item}</li>`)
}
document.write(`</ul>`)

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// 			let products = [
// 				{
// 					title: 'milk',
// 					price: 22,
// 					image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// 				},
// 				{
// 					title: 'juice',
// 					price: 27,
// 					image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// 				},
// 				{
// 					title: 'tomato',
// 					price: 47,
// 					image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// 				},
// 				{
// 					title: 'tea',
// 					price: 15,
// 					image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
// 				},
// 			];

// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

document.write(
  `<div><h1>Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону (products)</h1></div>`
)

let products = [
  {
    title: 'milk',
    price: 22,
    image:
      'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg',
  },
  {
    title: 'juice',
    price: 27,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg',
  },
  {
    title: 'tomato',
    price: 47,
    image:
      'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74',
  },
  {
    title: 'tea',
    price: 15,
    image:
      'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png',
  },
]

for (const product of products) {
  document.write(`<div class="product-card">`)
  document.write(
    `<h3 class="product-title">${product.title}. Price - ${product.price}</h3>`
  )
  document.write(`<img src="${product.image}" alt="" class="product-image">`)
  document.write(`</div>`)
}

// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

let users = [
  { name: 'vasya', age: 31, status: false },
  { name: 'petya', age: 30, status: true },
  { name: 'kolya', age: 29, status: true },
  { name: 'olya', age: 28, status: false },
  { name: 'max', age: 30, status: true },
  { name: 'anya', age: 31, status: false },
  { name: 'oleg', age: 28, status: false },
  { name: 'andrey', age: 29, status: true },
  { name: 'masha', age: 30, status: true },
  { name: 'olya', age: 31, status: false },
  { name: 'max', age: 31, status: true },
]

document.write(`<div><h3> Користувачі зі статусом true </h3></div>`)
for (const user of users) {
  if (user.status) {
    document.write(`<div class="user-card">`)
    document.write(`<h3 class="user-name">Name - ${user.name}</h3>`)
    document.write(`<p class="user-age">Age - ${user.age}</p>`)
    document.write(`<p class="user-status">Status - ${user.status}</p>`)
    document.write(`</div>`)
  }
}

document.write(`<div><h3>Користувачі зі статусом false</h3></div>`)
for (const user of users) {
  if (!user.status) {
    document.write(`<div class="user-card">`)
    document.write(`<h3 class="user-name">Name - ${user.name}</h3>`)
    document.write(`<p class="user-age">Age - ${user.age}</p>`)
    document.write(`<p class="user-status">Status - ${user.status}</p>`)
    document.write(`</div>`)
  }
}

document.write(`<div><h3> Користувачі які старші за 30 років</h3></div>`)
for (const user of users) {
  if (user.age > 30) {
    document.write(`<div class="user-card">`)
    document.write(`<h3 class="user-name">Name - ${user.name}</h3>`)
    document.write(`<p class="user-age">Age - ${user.age}</p>`)
    document.write(`<p class="user-status">Status - ${user.status}</p>`)
    document.write(`</div>`)
  }
}
