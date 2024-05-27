// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const arrayOfObjects = [
  { id: 1, name: 'John', age: 25, email: 'john@example.com' },
  { id: 2, name: 'Alice', age: 30, email: 'alice@example.com' },
  { id: 3, name: 'Bob', age: 22, email: 'bob@example.com' },
  { id: 4, name: 'Emma', age: 28, email: 'emma@example.com' },
  { id: 5, name: 'David', age: 35, email: 'david@example.com' },
  { id: 6, name: 'Olivia', age: 29, email: 'olivia@example.com' },
  { id: 7, name: 'James', age: 33, email: 'james@example.com' },
  { id: 8, name: 'Sophia', age: 27, email: 'sophia@example.com' },
  { id: 9, name: 'William', age: 31, email: 'william@example.com' },
  { id: 10, name: 'Charlotte', age: 26, email: 'charlotte@example.com' },
  { id: 11, name: 'Daniel', age: 24, email: 'daniel@example.com' },
  { id: 12, name: 'Emily', age: 32, email: 'emily@example.com' },
  { id: 13, name: 'Michael', age: 23, email: 'michael@example.com' },
  { id: 14, name: 'Grace', age: 29, email: 'grace@example.com' },
  { id: 15, name: 'Liam', age: 28, email: 'liam@example.com' },
  { id: 16, name: 'Ava', age: 30, email: 'ava@example.com' },
  { id: 17, name: 'Ethan', age: 31, email: 'ethan@example.com' },
  { id: 18, name: 'Mia', age: 27, email: 'mia@example.com' },
  { id: 19, name: 'Benjamin', age: 33, email: 'benjamin@example.com' },
  { id: 20, name: 'Harper', age: 26, email: 'harper@example.com' },
  { id: 21, name: 'Isaac', age: 34, email: 'isaac@example.com' },
  { id: 22, name: 'Avery', age: 25, email: 'avery@example.com' },
  { id: 23, name: 'Lucas', age: 29, email: 'lucas@example.com' },
  { id: 24, name: 'Ella', age: 27, email: 'ella@example.com' },
  { id: 25, name: 'Jackson', age: 32, email: 'jackson@example.com' },
  { id: 26, name: 'Scarlett', age: 28, email: 'scarlett@example.com' },
  { id: 27, name: 'Alexander', age: 30, email: 'alexander@example.com' },
  { id: 28, name: 'Sofia', age: 26, email: 'sofia@example.com' },
  { id: 29, name: 'Henry', age: 31, email: 'henry@example.com' },
  { id: 30, name: 'Amelia', age: 24, email: 'amelia@example.com' },
]

const itemsPerPage = 10
let currentPage = 0

const outputDiv = document.getElementById('output')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

function displayObjects(startIndex, endIndex) {
  outputDiv.innerHTML = ''
  for (let i = startIndex; i < endIndex; i++) {
    if (arrayOfObjects[i]) {
      const obj = arrayOfObjects[i]
      const objElement = document.createElement('div')
      objElement.textContent = `Object ${i + 1}: ${JSON.stringify(obj)}`
      outputDiv.appendChild(objElement)
    }
  }
}

function showNextPage() {
  const totalPages = Math.ceil(arrayOfObjects.length / itemsPerPage)
  if (currentPage < totalPages - 1) {
    currentPage++
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    console.log(startIndex, endIndex)
    displayObjects(startIndex, endIndex)
  }
}

function showPrevPage() {
  if (currentPage > 0) {
    currentPage--
    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    console.log(startIndex, endIndex)
    displayObjects(startIndex, endIndex)
  }
}

displayObjects(0, itemsPerPage)

prevBtn.addEventListener('click', showPrevPage)
nextBtn.addEventListener('click', showNextPage)
