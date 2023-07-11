const cardArray = [
    {
        name: 'fries',
        img: 'fries.png'
    },
    {
        name: "cheeseburger",
        img: "cheeseburger.png",
    },
    {
        name: "pizza",
        img: "pizza.png",
    },
    {
        name: "icecream",
        img: "ice-cream.png",
    },

    {
        name: "hotdog",
        img: "hotdog.png",
    },

    {
        name: "milkshake",
        img: "milkshake.png",
    },
    
    {
        name: 'fries',
        img: 'fries.png'
    },
    {
        name: "cheeseburger",
        img: "cheeseburger.png",
    },
    {
        name: "pizza",
        img: "pizza.png",
    },
    {
        name: "icecream",
        img: "ice-cream.png",
    },

    {
        name: "hotdog",
        img: "hotdog.png",
    },

    {
        name: "milkshake",
        img: "milkshake.png",
    },
    
    
]


const retry = document.querySelector(".reload")

cardArray.sort(() => 0.5 - Math.random())


const gridEl = document.querySelector('#grid')
const resultEl = document.querySelector("#result")
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
const cardsLost = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++){
       const card =  document.createElement("img")
       card.setAttribute('src', 'blank.png')
       card.setAttribute("data-id", i)
       card.addEventListener('click', flipCard)
        gridEl.appendChild(card)
    }
}

createBoard()

function checkMatch(){
  const cards = document.querySelectorAll('#grid img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]
  if (optionOneId == optionTwoId) {

    cards[optionOneId].setAttribute('src', "blank.png")
    cards[optionTwoId].setAttribute('src', "blank.png")
 
  }
   
 else if (cardsChosen[0] === cardsChosen[1]) {
  
    cards[optionOneId].setAttribute('src', 'white.png')
    cards[optionTwoId].setAttribute('src', 'white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
   } else {
    cards[optionOneId].setAttribute('src', 'blank.png')
    cards[optionTwoId].setAttribute('src', 'blank.png')

    cardsLost.push(cardsLost)
    console.log(cardsLost);
   }
   
   const containerEl = document.querySelector(".container")
   const alertEl = document.querySelector(".alert")


   if(cardsLost.length > 6){
       containerEl.classList.add("hide")
       alertEl.classList.remove("hide")
       alertEl.addEventListener("click", function() {
          location.reload()
       })

   }

   resultEl.textContent =  `Score: ${cardsWon.length}`
   cardsChosen = []
   cardsChosenIds = []

   if (cardsWon.length == cardArray.length/2) {
      resultEl.innerHTML ="You Won!"
   }
}

function flipCard(){
 const cardId = this.getAttribute('data-id')
 cardsChosen.push(cardArray[cardId].name)
 cardsChosenIds.push(cardId)
 this.setAttribute('src', cardArray[cardId].img)
 if (cardsChosen.length === 2) {
   setTimeout(checkMatch, 200)
 }
}






retry.addEventListener("click", () => {
    location.reload()
})














