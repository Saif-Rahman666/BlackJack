let hasBlackJack = false
let isAlive = false
let cards = []
let sum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
console.log(sum)
let message =""
console.log(cards)

    
function getRandomCard(){
    let randomNumber= Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    }else if ( randomNumber ===1 ){
        return 11
    }else{
        return randomNumber
    }
}
function startGame(){
    let name = prompt("Please enter your name", "Human");
    let chips = prompt("Please enter the amount of chips$")
        if (name&&chips != null) {
    playerEl.innerHTML = "Name: " + name +" " + "Chips: $"+chips;
  }
    isAlive = true
    let firstcard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstcard, secondCard ]
    sum = firstcard+secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards : "
    for (let i =0; i<cards.length;i++){
        cardsEl.textContent += cards[i]+" "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum<21){
        message=("do you want to draw?")        
    }
    else if (sum ===21){
        message=("BLACKJACK!")  
        hasBlackJack = true     
    }
    else{
        message=("you're out of the game!")   
        isAlive = false     
    }
    messageEl.textContent = message
}
function newCard(){
    if (hasBlackJack === false && isAlive === true){
    let third = getRandomCard()
    console.log("draw a new card")
    sum += third
    cards.push(third)
    renderGame()
}
    
    
}
