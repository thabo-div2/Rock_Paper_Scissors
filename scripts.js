const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const possibleChoices = document.querySelectorAll("button");
const computerEl = document.querySelector("#computerChoice");
const userEl = document.querySelector("#playerChoice");
const resultEl = document.querySelector("#result");

let computerChoice = ["rock", "paper", "scissor"];
let computerTurn = 0;
let timerId;

possibleChoices.forEach((possibleChoice) =>
	possibleChoice.addEventListener("click", (e) => {
		let userChoice = e.target.id;

		console.log(userChoice);
		if (userChoice !== "") {
			userEl.innerHTML = `${userChoice}`;
			if (computerTurn === 0) {
				let random = Math.floor(Math.random() * computerChoice.length);
				let computerMove = computerChoice[random];
				computerEl.innerHTML = computerChoice[random];
				if (computerMove === userChoice) {
					resultEl.innerHTML = "Its a draw";
				}
				if (computerMove === "rock" && userChoice === "paper") {
					resultEl.innerHTML = "Player won";
				}
				if (computerMove === "paper" && userChoice === "scissor") {
					resultEl.innerHTML = "Player won";
				}
				if (computerMove === "scissor" && userChoice === "rock") {
					resultEl.innerHTML = "Player won";
				}
				if (computerMove === "rock" && userChoice === "scissor") {
					resultEl.innerHTML = "Computer won";
				}
				if (computerMove === "paper" && userChoice === "rock") {
					resultEl.innerHTML = "Computer won";
				}
				if (computerMove === "scissor" && userChoice === "paper") {
					resultEl.innerHTML = "Computer won";
				}
				// console.log("Uthmaan is a Monkey");
			}
		} else {
			console.log("noose");
		}
	}),
);
