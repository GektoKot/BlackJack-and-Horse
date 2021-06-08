

let firstCard
let secondCard
let isBJ = false
let isDead = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let sum = 0
let cardsEl = document.getElementById("cards-el")
let moreBtn = document.getElementById("more-btn")
let addBtn = document.getElementById("add-btn")
let addNotBtn = document.getElementById("add-not-btn")
let bankMoneyEl = document.getElementById("bank-money-el")
let bankMoney = 300
bankMoneyEl.textContent = "Bank money: " + bankMoney
let moneyEl = document.getElementById("money-el")
let money = 300
moneyEl.textContent = "Yours money: " + money
let betEl = document.getElementById("bet-el")
let bet = 10
betEl.textContent = "Bet: " + bet

function add() {
    ++bet
    betEl.textContent = "Bet: " + bet
}
function addNot() {
    --bet
    betEl.textContent = "Bet: " + bet
}




function startGame() {
    isBJ = false
    isDead = false
    firstCard = newCard()
    // console.log(firstCard);
    secondCard = newCard()
    // console.log(secondCard);
    cardsEl.textContent =  "Cards: " + firstCard + ", " + secondCard
    sum = firstCard + secondCard
    // console.log(sum);
    sumEl.textContent = "Sum: " + sum
    // console.log(sum);
    check(sum)
    // moreController()
    moreController()


}

function moreController() {
    if (isDead || isBJ) {
        moreBtn.setAttribute("disabled", "disabled")
        addBtn.setAttribute("disabled", "disabled")
        addNotBtn.setAttribute("disabled", "disabled")
        
    } else {
        moreBtn.removeAttribute("disabled", "disabled")
        addBtn.removeAttribute("disabled", "disabled")
        addNotBtn.removeAttribute("disabled", "disabled")
    }
}

function newCard() {
    return Math.floor(Math.random() * (11 - 2 + 1) + 2)
}

function check(sum) {
    if (sum <= 20) {
        messageEl.textContent = "Another card?"
        // console.log(message);
    } else if (sum === 21) {
        messageEl.textContent = "YeeY! BJ and Horse"
        isBJ = true
    } else {
        messageEl.textContent = "Perebor!"
        isDead = true
    }
}

function more() {
    let temp = newCard()
    sum += temp
    cardsEl.textContent += ", " + temp
    sumEl.textContent = "Sum: " + sum
    check(sum)
    moreController()
    
}