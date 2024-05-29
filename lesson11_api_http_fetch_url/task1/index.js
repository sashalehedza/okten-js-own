// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.write(`<div>`)
    data.carts.forEach((cart) => {
      document.write(`<div>`)
      document.write(`<h3>id - ${cart.id}</h3>`)
      document.write(`<h3>total - ${cart.total}</h3>`)
      document.write(`<h3>discountedTotal - ${cart.discountedTotal}</h3>`)
      document.write(`<h3>userId - ${cart.userId}</h3>`)
      document.write(`<h3>totalProducts - ${cart.totalProducts}</h3>`)
      document.write(`<h3>totalQuantity - ${cart.totalQuantity}</h3>`)
      cart.products.forEach((product) => {
        document.write(`<div>`)
        document.write(`${product.id} - ${product.title} - ${product.price}`)
        document.write(`<img src="${product.thumbnail}" alt="">`)
        document.write(`</div>`)
      })
      document.write(`</div>`)
    })
    document.write(`</div>`)
  })
  .catch((error) => {
    console.log(error)
  })
