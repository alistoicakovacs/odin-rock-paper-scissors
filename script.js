const result = document.querySelector(".result");
const answer = document.querySelector('.answer')
const player = document.querySelector('.player')
const playerChoice = document.querySelector(".player-choice");
const computer = document.querySelector('.computer')
const computerChoice = document.querySelector(".computer-choice");
const option = document.querySelector(".options");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

const choices = ['Rock', 'Paper' , 'Scissor']

function changeChoice (event) {

   if (event.target == document.querySelector('.rock')) {
      // document.querySelector('.player-choice').innerHTML == '<h2>Rock</h2>'
      player.innerHTML = "<h2>Rock</h2>"
   } else if (event.target == document.querySelector('.paper')) {
      player.innerHTML = "<h2>Paper</h2>"
   } else {
      player.innerHTML = "<h2>Scissor</h2>"
   }

   if(player.innerHTML) {
      computer.innerHTML = `<h2>${choices[Math.floor(Math.random() * choices.length)]}</h2>`;
      //Rock
      if (player.innerHTML == "<h2>Rock</h2>" && computer.innerHTML == "<h2>Paper</h2>") {
         answer.innerHTML = "<h3>You Lost!</h3>"
      } else if (player.innerHTML == "<h2>Rock</h2>" && computer.innerHTML == "<h2>Rock</h2>") {
         answer.innerHTML = "<h3>Tie!</h3>"
      } else if (player.innerHTML == "<h2>Rock</h2>" && computer.innerHTML == "<h2>Scissor</h2>") {
         answer.innerHTML = "<h3>You Won!</h3>"
      }

       //Paper
       if (player.innerHTML == "<h2>Paper</h2>" && computer.innerHTML == "<h2>Scissor</h2>") {
         answer.innerHTML = "<h3>You Lost!</h3>"
      } else if (player.innerHTML == "<h2>Paper</h2>" && computer.innerHTML == "<h2>Paper</h2>") {
         answer.innerHTML = "<h3>Tie!</h3>"
      } else if (player.innerHTML == "<h2>Paper</h2>" && computer.innerHTML == "<h2>Rock</h2>") {
         answer.innerHTML = "<h3>You Won!</h3>"
      }

      //Scissor
      if (player.innerHTML == "<h2>Scissor</h2>" && computer.innerHTML == "<h2>Rock</h2>") {
         answer.innerHTML = "<h3>You Lost!</h3>"
      } else if (player.innerHTML == "<h2>Scissor</h2>" && computer.innerHTML == "<h2>Scissor</h2>") {
         answer.innerHTML = "<h3>Tie!</h3>"
      } else if (player.innerHTML == "<h2>Scissor</h2>" && computer.innerHTML == "<h2>Paper</h2>") {
         answer.innerHTML = "<h3>You Won!</h3>"
      }

      if (answer.innerHTML == "<h3>You Lost!</h3>") {
         document.body.style.backgroundColor="red"
         document.body.style.color="white"


      } else if (answer.innerHTML == "<h3>You Won!</h3>") {
         document.body.style.backgroundColor="green"
         document.body.style.color="white"

      } else {
         document.body.style.backgroundColor="yellow"
         document.body.style.color="black"

      }

      setTimeout (() => {
         document.body.style.backgroundColor="white"
         document.body.style.color="black"
         computer.innerHTML = "";
         player.innerHTML = "";
         answer.innerHTML = ""
      }, 3000)
   
}};

option.addEventListener("click", changeChoice);


//comment