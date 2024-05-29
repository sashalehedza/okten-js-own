// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.write(`<div>`)
    document.write(`<ul>`)
    data.forEach((user) => {
      document.write(`<li>id - ${user.id}, name - ${user.name}</li>`)
      document.write(
        `<a href="user-details.html?id=${user.id}">user-details</a>`
      )
    })
    document.write(`</ul>`)
    document.write(`</div>`)
  })
  .catch((error) => {
    console.log(error)
  })
