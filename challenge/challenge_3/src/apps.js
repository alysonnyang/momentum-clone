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
