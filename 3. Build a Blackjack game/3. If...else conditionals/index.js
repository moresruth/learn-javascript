let firstCard = 10
let secondCard = 1
let sum = firstCard + secondCard

if (sum < 21){
    console.log("Do you want to draw a new card")
} else if (sum === 21) {
    console.log("Wohoo! You've got the BLACKJACK!")
} else {
    console.log("You're out of the Game!")
}