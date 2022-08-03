// DOM Document Object Model (how you use JavaScript to modify a website)
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


