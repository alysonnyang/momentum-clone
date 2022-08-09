import "./styles.css";
const colors = ["#ebbb08","#8f46ab","#2c8bd4"];
const fullSize = screen.width;

function windowSizing(){
    const windowSize = window.innerWidth;
    const VIEWTWOTHIRD = fullSize * (1.5/2)
    const VIEWONETHIRD = fullSize * (1/2)
    if(windowSize >= VIEWTWOTHIRD){
        document.body.style.backgroundColor = colors[0];
    }else if(windowSize < VIEWTWOTHIRD && (windowSize > VIEWONETHIRD)) {
        document.body.style.backgroundColor = colors[1];
    }else if(windowSize < VIEWONETHIRD){
        document.body.style.backgroundColor = colors[2];
    }
}
document.body.style.backgroundColor = colors[0];
window.addEventListener("resize",windowSizing);
