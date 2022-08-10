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
