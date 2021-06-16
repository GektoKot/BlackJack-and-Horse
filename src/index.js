// Сам черт ногу сломит


let isBJ = false
let isDead = false
let inGame = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let BankSumEl = document.getElementById("bank-sum-el")
let sum = 0
let bankSum = 0
let cardsEl = document.getElementById("cards-el")
let moreBtn = document.getElementById("more-btn")
let addBtn = document.getElementById("add-btn")
let openBtn = document.getElementById("open-btn")
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

function openUp() {
    console.log(bankSum);

    while (bankSum < 14) {
        bankSum += newCard()
        console.log(bankSum);
    }

    BankSumEl.textContent += " " + bankSum

    if (isBJ || sum > bankSum || bankSum > 21) {
        money += bet
        bankMoney -= bet
        bankMoneyEl.textContent = "Bank money: " + bankMoney
        moneyEl.textContent = "Yours money: " + money
        isDead = true
        inGame = false
        moreController()
    } else {
        money -= bet
        bankMoney += bet
        bankMoneyEl.textContent = "Bank money: " + bankMoney
        moneyEl.textContent = "Yours money: " + money
        isDead = true
        inGame = false
        moreController()
    }
}


function startGame() {
    let firstCard = newCard()
    let firstCardBank = newCard()
    let secondCard = newCard()
    let secondCardBank = newCard()

    if (inGame) {
        return
    }
    if (money <= 0) {
        messageEl.textContent = "You Lose!"
        isDead = true
        moreController()
    }

    isBJ = false
    isDead = false
    inGame = true
    
    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard
    sum = firstCard + secondCard

    bankSum = firstCardBank + secondCardBank
    BankSumEl.textContent = "BankSum: "
    sumEl.textContent = "Sum: " + sum
    check(sum)
    moreController()
}

function moreController() {
    if (isDead) { //|| isBJ
        moreBtn.setAttribute("disabled", "disabled")
        addBtn.setAttribute("disabled", "disabled")
        addNotBtn.setAttribute("disabled", "disabled")
        openBtn.setAttribute("disabled", "disabled")
    } else {
        moreBtn.removeAttribute("disabled", "disabled")
        addBtn.removeAttribute("disabled", "disabled")
        addNotBtn.removeAttribute("disabled", "disabled")
        openBtn.removeAttribute("disabled", "disabled")
    }
}

function newCard() {
    let tempCard = Math.floor(Math.random() * 13) + 1
    switch (tempCard) {
        case 1:
            return 11
        case 11:
            return 2
        case 12:
            return 3
        case 13:
            return 4
        default:
            return tempCard
    }
}

function check(sum) {
    if (sum <= 20) {
        messageEl.textContent = "Another card?"
    } else if (sum === 21) {
        messageEl.textContent = "YeeY! BJ and Horse"
        openUp()
        isBJ = true
        inGame = false
    } else {
        messageEl.textContent = "Perebor!"
        openUp()
        isDead = true
        inGame = false
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