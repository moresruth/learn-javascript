// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorEl = document.getElementById("error")


function purchase(){
    // console.log(errorEl)
    errorEl.textContent ="Something went wrong, please try again"
}

// purchase()