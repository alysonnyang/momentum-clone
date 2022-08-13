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

// [ Solution ]

// : index.js
// import "./styles.css";

// const body = document.body;

// const BIG_SCREEN = "bigScreen";
// const MEDIUM_SCREEN = "mediumScreen";
// const SMALL_SCREEN = "smallScreen";

// function setBodySize() {
//   const width = window.innerWidth;
//   if (width > 1280) {
//     body.classList.add(BIG_SCREEN);
//     body.classList.remove(MEDIUM_SCREEN);
//   } else if (width <= 1280 && width >= 640) {
//     body.classList.add(MEDIUM_SCREEN);
//     body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
//   } else {
//     body.classList.add(SMALL_SCREEN);
//     body.classList.remove(MEDIUM_SCREEN);
//   }
// }

// window.addEventListener("load", setBodySize);
// window.addEventListener("resize", setBodySize);

// : styles.css
// body {
//     display: flex;
//     font-family: sans-serif;
//   }
  
//   h2 {
//     color: white;
//   }
  
//   .bigScreen {
//     background-color: #f1c40f;
//   }
  
//   .mediumScreen {
//     background-color: #9b59b6;
//   }
  
//   .smallScreen {
//     background-color: #3498db;
//   }