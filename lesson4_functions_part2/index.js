// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectangleArea = (a, b) => {
  return a * b
}

console.log(rectangleArea(10, 20))
console.log(rectangleArea(20, 30))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const circleArea = (r) => {
  return 3.14 * r * r
}

console.log(circleArea(10))
console.log(circleArea(20))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cilinderArea = (h, r) => {
  return 3.14 * r * r * h
}

console.log(cilinderArea(10, 20))
console.log(cilinderArea(20, 30))

// - створити функцію яка приймає масив та виводить кожен його елемент

const printArray = (arr) => {
  for (let item of arr) {
    console.log(item)
  }
}

printArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const createParagraph = (text) => {
  document.write(`<p>${text}</p>`)
}

createParagraph('Hello World!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const createUl = (text) => {
  document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
}

createUl('Hello World!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createUl2 = (text, count) => {
  document.write(`<ul>`)
  for (let i = 0; i < count; i++) {
    document.write(`<li>${text}</li>`)
  }
  document.write(`</ul>`)
}

createUl2('Hello World!', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const createList = (arr) => {
  document.write(`<ul>`)
  for (let item of arr) {
    document.write(`<li>${item}</li>`)
  }
  document.write(`</ul>`)
}

createList(['abc', 123, true, false])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const createBlock = (arr) => {
  for (let item of arr) {
    document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
  }
}

createBlock([
  { id: 1, name: 'Sasha', age: 20 },
  { id: 2, name: 'Artem', age: 25 },
])

// - створити функцію яка повертає найменьше число з масиву

const findMin = (arr) => {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
  }
  return min
}

console.log(findMin([12, 5, 6, 7, 8, 9, 10]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr) => {
  let sum = 0
  for (let item of arr) {
    sum += item
  }
  return sum
}

console.log(sum([1, 2, 10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

const swap = (arr, index1, index2) => {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
  return arr
}

console.log(swap([11, 22, 33, 44], 0, 1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sum, currencyValues, exchangeCurrency) => {
  for (let item of currencyValues) {
    if (item.currency === exchangeCurrency) {
      return sum / item.value
    }
  }
}

console.log(
  exchange(
    10000,
    [
      { currency: 'USD', value: 40 },
      { currency: 'EUR', value: 42 },
    ],
    'USD'
  )
)
