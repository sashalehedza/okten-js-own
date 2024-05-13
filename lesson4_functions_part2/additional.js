function userCard(key) {
  let balance = 100
  let transactionLimit = 100
  let historyLogs = []

  if (key < 1 || key > 3) {
    console.error('Invalid card key')
  }

  function getCardOptions() {
    return { key, balance, transactionLimit, historyLogs }
  }

  function putCredits(amount) {
    balance += amount
    historyLogs[historyLogs.length] = {
      operationType: 'Received credits',
      credits: amount,
      operationTime: new Date().toLocaleString(),
    }
  }

  function takeCredits(amount) {
    if (amount <= balance && amount <= transactionLimit) {
      balance -= amount
      historyLogs[historyLogs.length] = {
        operationType: 'Withdrawal of credits',
        credits: amount,
        operationTime: new Date().toLocaleString(),
      }
    } else {
      console.error('Insufficient funds or transaction limit exceeded')
    }
  }

  function setTransactionLimit(limit) {
    transactionLimit = limit
    historyLogs[historyLogs.length] = {
      operationType: 'Transaction limit change',
      credits: limit,
      operationTime: new Date().toLocaleString(),
    }
  }

  function transferCredits(amount, recipientCard) {
    const tax = 0.005
    const amountWithTax = amount * (1 - tax)
    if (amountWithTax <= balance && amountWithTax <= transactionLimit) {
      takeCredits(amount)
      recipientCard.putCredits(amount * (1 - tax))
    } else {
      console.error('Insufficient funds or transaction limit exceeded')
    }
  }

  return {
    getCardOptions,
    putCredits,
    takeCredits,
    setTransactionLimit,
    transferCredits,
  }
}

function UserAccount(name) {
  let cards = []

  function addCard() {
    if (cards.length < 3) {
      const card = userCard(cards.length + 1)
      cards.push(card)
      console.log(`New card added for ${name}`)
    } else {
      console.log(`Cannot add more than 3 cards for ${name}`)
    }
  }

  function getCardByKey(key) {
    const index = key - 1
    if (index >= 0 && index < cards.length) {
      return cards[index]
    } else {
      console.log(`Invalid card key ${key}`)
    }
  }

  return {
    addCard,
    getCardByKey,
  }
}

const user1 = UserAccount('User 1')
user1.addCard()
user1.addCard()
user1.addCard()
user1.addCard()

const user1Card1 = user1.getCardByKey(1)
user1Card1.putCredits(100)
user1Card1.setTransactionLimit(200)

const user2 = UserAccount('User 2')
user2.addCard()
user2.addCard()

const user2Card1 = user2.getCardByKey(1)
user2Card1.putCredits(500)
user2Card1.setTransactionLimit(300)

const user2Card2 = user1.getCardByKey(2)
user2Card2.putCredits(500)
user2Card2.setTransactionLimit(300)
user2Card2.transferCredits(120, user1Card1)

console.log(user1Card1.getCardOptions())
console.log(user2Card1.getCardOptions())
console.log(user2Card2.getCardOptions())
