// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

let id = new URLSearchParams(window.location.search).get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.write(`<div>`)
    document.write(`<ul>`)
    document.write(`<li>id - ${data.id}, name - ${data.name}</li>`)
    document.write(`</ul>`)
    document.write(`</div>`)
  })
  .catch((error) => {
    console.log(error)
  })
