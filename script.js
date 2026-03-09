const gradients = [

"linear-gradient(135deg,#667eea,#764ba2)",
"linear-gradient(135deg,#ff9966,#ff5e62)",
"linear-gradient(135deg,#56ab2f,#a8e063)",
"linear-gradient(135deg,#36d1dc,#5b86e5)",
"linear-gradient(135deg,#ff512f,#dd2476)"

]

async function getQuote(){

let response = await fetch("https://dummyjson.com/quotes/random")

let data = await response.json()

document.getElementById("quote").innerText = `"${data.quote}"`

document.getElementById("author").innerText = "- " + data.author

let randomBg = gradients[Math.floor(Math.random()*gradients.length)]

document.body.style.background = randomBg

}

function copyQuote(){

let text =
document.getElementById("quote").innerText + " " +
document.getElementById("author").innerText

navigator.clipboard.writeText(text)

alert("Quote copied!")

}

function shareTwitter(){

let text =
document.getElementById("quote").innerText + " " +
document.getElementById("author").innerText

let url =
"https://twitter.com/intent/tweet?text=" + encodeURIComponent(text)

window.open(url)

}

function shareWhatsapp(){

let text =
document.getElementById("quote").innerText + " " +
document.getElementById("author").innerText

let url =
"https://wa.me/?text=" + encodeURIComponent(text)

window.open(url)

}

function toggleMode(){

document.body.classList.toggle("dark")

let icon = document.getElementById("mode")

if(document.body.classList.contains("dark")){
icon.classList.remove("fa-moon")
icon.classList.add("fa-sun")
}
else{
icon.classList.remove("fa-sun")
icon.classList.add("fa-moon")
}

}