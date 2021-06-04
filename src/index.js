

let firstCard 
let secondCard
let isBJ = false
let isAlive = true
let message = ""

function startGame() {
    firstCard = newCard()
    secondCard = newCard()
}

function newCard() {
    return Math.floor(Math.random() * (11 - 2 + 1) + 2)
}

let sum = firstCard + secondCard


if (sum <= 20) {
    message = "Another card?"
} else if (sum === 21) {
    message = "YeeY! BJ and Horse"
    isBJ = true
} else {
    message = "Perebor!"
    isAlive = false
}

console.log(message);