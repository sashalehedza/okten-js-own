// const items = document.querySelectorAll('.item-grid__item')

// const itemsArray = Array.from(items)
//   .map((item) => {
//     const titleElement = item.querySelector('.item-grid-card__title')
//     const authorElement = item.querySelector('.item-grid-music-preview__author')
//     const audioUrlElement = item.querySelector(
//       '[data-audio-player-preview-url-value]'
//     )

//     if (titleElement && authorElement && audioUrlElement) {
//       const title = titleElement.textContent.trim()
//       const author = authorElement.textContent.trim()
//       const mp3 = audioUrlElement.getAttribute(
//         'data-audio-player-preview-url-value'
//       )

//       return { title, author, mp3 }
//     }
//   })

// console.log(itemsArray)

const items = document.querySelectorAll('.item-grid__item')

const itemsArray = []

items.forEach((item) => {
  const titleElement = item.querySelector('.item-grid-card__title')
  const authorElement = item.querySelector('.item-grid-music-preview__author')
  const audioUrlElement = item.querySelector(
    '[data-audio-player-preview-url-value]'
  )

  const title = titleElement.textContent.trim()
  const author = authorElement.textContent.trim()
  const mp3 = audioUrlElement.getAttribute(
    'data-audio-player-preview-url-value'
  )

  itemsArray.push({ title, author, mp3 })
})

console.log(itemsArray)

// const items = document.querySelectorAll('.item-grid__item')
// const itemsArray = Array.from(items)

// console.log(items)
// console.log(itemsArray)
