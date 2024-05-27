// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.getElementById('name').value
  const surname = document.getElementById('surname').value
  const age = document.getElementById('age').value

  const person = {
    name,
    surname,
    age,
  }

  let block = document.createElement('div')
  let h2 = document.createElement('h2')

  // h2.innerText = JSON.stringify(person)

  h2.innerText = `name: ${person.name}, surname: ${person.surname}, person: ${person.age}`

  block.append(h2)

  document.body.appendChild(h2)
})
