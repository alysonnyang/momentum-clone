// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const rangeMax = document.querySelector("h2 span");
const rangeSelector = document.querySelector(".jsRange");
const submitBtn = document.querySelector(".guessSubmit");
const result = document.querySelector(".result");
const winOrLose = document.querySelector(".winOrLose");

function handleChange(event) {
    rangeMax.innerText = rangeSelector.value;
}

function handleSubmit(event) {
    const player = document.querySelector(".guessField").value;
    const machine = String(Math.floor(Math.random() * rangeSelector.value));
    result.innerText = `You chose ${player}, the machine chose ${machine}`;
    winOrLose.innerText = getWinOrLose(player,machine);
}

function getWinOrLose(player,machine) {
    if(player === machine){
        return "You won!"
    }else {
        return "You lost!"
    }
}

function init() {
    rangeSelector.addEventListener("input",handleChange);
    submitBtn.addEventListener("click",handleSubmit);
}

init();

// [ Solution ]

// const span = document.querySelector("span");
// const range = document.querySelector(".jsRange");
// const guessInput = document.querySelector(".guessField");
// const guessSubmit = document.querySelector(".guessSubmit");
// const result = document.querySelector(".result");
// const winOrLose = document.querySelector(".winOrLose");

// function hadnleChange(event) {
//     event.preventDefault();
//     const max = range.value;
//     span.innerHTML = `${max}`;
// }

// function handleSubmit(event) {
//     event.preventDefault();
//     const maxRange = range.value;
//     const userNum = parseInt(guessInput.value, 10);
//     const randomNum = Math.floor(Math.random() * (maxRange - 0 + 1));

//     if (isNaN(userNum) || userNum > maxRange || userNum < 0) {
//         alert("The number is either empty or out of range.");
//         return false;
//     }
//     if (randomNum === userNum) {
//         result.innerHTML = `You chose: ${userNum}, the machine chose: ${randomNum}`;
//         winOrLose.innerHTML = `You win!`;
//     } else {
//         result.innerHTML = `You chose: ${userNum}, the machine chose: ${randomNum}`;
//         winOrLose.innerHTML = `You lose!`;
//     }
// }

// function init() {
//     range.addEventListener("input", hadnleChange);
//     guessSubmit.addEventListener("click", handleSubmit);
// }

// init();