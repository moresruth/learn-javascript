let cards = [7, 4]
cards.push(6)
//console.log(cards)
// push adds an array
// pop remove  last element from array
// shift remove the first elemet from array
// unshift add new element to an array

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"



messages.push(newMessage)
console.log(messages)

messages.pop()
console.log(messages)

messages.shift()
console.log(messages)

messages.unshift(newMessage)
console.log(messages)