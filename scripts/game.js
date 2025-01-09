let counter = 0;
let firstSelection = "";
let secondSelection = "";
let firstCard = null;

let matchedPairs = 0;

const cards = document.querySelectorAll(".cards .card");
const totalPairs = cards.length / 2;

const messageElement = document.querySelector(".message");

cards.forEach((card) => {
  card.addEventListener("click", () => {
   if(card.classList.add("clicked") || card === firstCard){
        return;
    }
    card.classList.add("clicked");

    if (counter === 0) {
      firstSelection = card.getAttribute("flower");
      firstCard = card;
      counter++;
    } else {
      secondSelection = card.getAttribute("flower");
      counter = 0;

      if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          ".card[flower='" + firstSelection + "']"
        );

        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");

        matchedPairs++;

        if (matchedPairs === totalPairs) {
          messageElement.style.display = "block"; 
        }

      } else {
        const incorrectCards = document.querySelectorAll(".card.clicked");

        incorrectCards[0].classList.add("shake");
        incorrectCards[1].classList.add("shake");

        setTimeout(() => {
          incorrectCards[0].classList.remove("shake");
          incorrectCards[0].classList.remove("clicked");
          incorrectCards[1].classList.remove("shake");
          incorrectCards[1].classList.remove("clicked");
        }, 800);
      }
      firstCard = null;
    }
  });
});