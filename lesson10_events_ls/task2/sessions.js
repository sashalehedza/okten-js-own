let sessions = JSON.parse(localStorage.getItem('sessions')) || []
let sessionsList = document.getElementById('sessionsList')

sessions.forEach(function (session, index) {
  let sessionDiv = document.createElement('div')

  let sessionHeader = document.createElement('h2')
  sessionHeader.textContent = 'Session ' + (index + 1)
  sessionDiv.appendChild(sessionHeader)

  let sessionInfo = document.createElement('p')
  sessionInfo.textContent = 'Date: ' + session.date + ', Time: ' + session.time
  sessionDiv.appendChild(sessionInfo)

  sessionsList.appendChild(sessionDiv)
})
