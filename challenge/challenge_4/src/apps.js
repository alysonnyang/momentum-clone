import "./styles.css";
const clock = document.querySelector(".js-clock")

function getTime() {
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    const xMasEve = new Date(`24 dec ${curYear}`);

    //calculate the difference
    const remainSeconds = (xMasEve - curDate)/1000;
    const days = Math.floor(remainSeconds/3600/24);
    const hours = String(Math.floor(remainSeconds/3600)%24).padStart(2,"0");
    const mins = String(Math.floor(remainSeconds/60)%60).padStart(2,"0");
    const secs = String(Math.floor(remainSeconds)%60).padStart(2,"0");
    clock.innerText = `${days}d ${hours}h ${mins}m ${secs}s`;
}

function init() {
    getTime();
}

init();
setInterval(init,1000);


// [ Solution ]

// function getTime() {
//   const xmasDay = new Date(`${new Date().getFullYear()}-12-24:00:00:00+0900`);
//   const now = new Date();
//   // This is in milisecondsx
//   const difference = new Date(xmasDay - now);
//   const secondsInMs = Math.floor(difference / 1000);
//   const minutesInMs = Math.floor(secondsInMs / 60);
//   const hoursInMs = Math.floor(minutesInMs / 60);
//   const days = Math.floor(hoursInMs / 24);
//   const seconds = secondsInMs % 60;
//   const minutes = minutesInMs % 60;
//   const hours = hoursInMs % 24;
//   const daysStr = `${days < 10 ? `0${days}` : days}d`;
//   const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
//   const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
//   const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
//   clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
// }

// function init() {
//   getTime();
//   setInterval(getTime, 1000);
// }
// init();