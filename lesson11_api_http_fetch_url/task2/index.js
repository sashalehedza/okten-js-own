// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.write(`<div>`)
    data.recipes.forEach((recipe) => {
      document.write(`<div>`)
      document.write(`<h3>id - ${recipe.id}</h3>`)
      document.write(`<h3>title - ${recipe.name}</h3>`)
      document.write(`<h3>ingredients</h3>`)
      document.write(`<ul>`)
      recipe.ingredients.forEach((ingredient) => {
        document.write(`<li>${ingredient}</li>`)
      })
      document.write(`</ul>`)
      document.write(`<h3>instructions</h3>`)
      document.write(`<ul>`)
      recipe.instructions.forEach((instruction) => {
        document.write(`<li>${instruction}</li>`)
      })
      document.write(`</div>`)
    })
    document.write(`</div>`)
  })
  .catch((error) => {
    console.log(error)
  })
