

let firstCard
let firstCardBank
let secondCard
let secondCardBank
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
    
    if (bankSum < 14) {
        bankSum += newCard()
        console.log(bankSum);
    }
    
    BankSumEl.textContent += " " + bankSum
    // здеся
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
    if (inGame) {
        return
    }

    isBJ = false
    isDead = false
    inGame = true
    firstCardBank = newCard()
    firstCard = newCard()
    
    // console.log(firstCard);
    secondCardBank = newCard()
    secondCard = newCard()
    // console.log(secondCard);
    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard
    sum = firstCard + secondCard
    
    bankSum = firstCardBank + secondCardBank
    BankSumEl.textContent = "BankSum: "
    // console.log(sum);
    sumEl.textContent = "Sum: " + sum
    // console.log(sum);
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
    return Math.floor(Math.random() * (11 - 2 + 1) + 2)
}

function check(sum) {
    if (sum <= 20) {
        messageEl.textContent = "Another card?"
        // console.log(message);
    } else if (sum === 21) {
        messageEl.textContent = "YeeY! BJ and Horse"
        openUp()
        isBJ = true
        inGame = false
    } else {
        messageEl.textContent = "Perebor!"
        openUp()
        isDead = true
        inGame= false
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