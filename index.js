function popFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

const scissorChild = `<div class="scissor__container circle scissor">
<img src="./assets/scissor.png" alt="" srcset="">
</div>`;

const rockChild = `<div class="rock__container circle rock"><img src="./assets/rock.png" alt="">
</div>`;

const paperChild = `<div class="paper__container circle paper">
<img src="./assets/hand.png" alt="">
</div>`;

const game = () => {
  let playerScore = 0;
  document.querySelector(".result__container").style.visibility = "hidden";
  document.querySelector(".result__container").style.position = "absolute";

  // Function to
  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["rock", "paper", "scissors"];
    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];
        if (option === rockBtn) {
          winner("rock", computerChoice, option);
        }
        if (option === paperBtn) {
          winner("paper", computerChoice, option);
        }
        if (option === scissorBtn) {
          winner("scissors", computerChoice, option);
        }
      });
    });
  };

  const winner = (player, computer, playerOption) => {
    document.querySelector(".component__container").style.visibility = "hidden";
    document.querySelector(".component__container").style.position = "absolute";
    document.querySelector(".result__container").style.visibility = "visible";
    document.querySelector(".result__container").style.position = "static";
    const playerScoreBoard = document.querySelector(".score");
    const result = document.querySelector(".result");
    const against = document.querySelector(".against");
    const playerResult = document.querySelector(".player__result");
    const pcResult = document.querySelector(".pc__result");
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if(player === 'rock') {
		playerResult.innerHTML = rockChild;
	}else if(player === 'paper') {
		playerResult.innerHTML = paperChild;
	}else{
        playerResult.innerHTML = scissorChild;
	}

	if(computer === 'rock') {
		pcResult.innerHTML = rockChild;
	}else if(computer === 'paper') {
		pcResult.innerHTML = paperChild;
	}else{
        pcResult.innerHTML = scissorChild;
	}

    if (player == computer) {
      result.innerHTML = "Tie";
      against.innerHTML = "";
    } else if (player === "rock") {
      if (computer === "paper") {
        result.textContent = "PC Won";
		against.textContent = "Against You"
      } else {
        result.textContent = "You Won";
		against.textContent = "Against PC"
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player === "scissors") {
      if (computer === "rock") {
        result.textContent = "PC Won";
		against.textContent = "Against You"
      } else {
        result.textContent = "You Won";
		against.textContent = "Against PC"
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player === "paper") {
      if (computer === "scissors") {
        result.textContent = "PC Won";
		against.textContent = "Against You"
      } else {
        result.textContent = "You Won";
		against.textContent = "Against PC"
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
  };
  playGame();
};

function playAgain() {
  document.querySelector(".component__container").style.visibility = "visible";
  document.querySelector(".component__container").style.position = "static";
  document.querySelector(".result__container").style.visibility = "hidden";
  document.querySelector(".result__container").style.position = "absolute";
}

game();
