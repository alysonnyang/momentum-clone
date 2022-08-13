import "./styles.css";

const selector = document.querySelector(".js-select");
const paint = document.createElement("span");
const SAVED_CNTRY = "country";


function handleChange() {
    const selectedCountry = selector.value;
    paint.innerText = selectedCountry;
    document.body.appendChild(paint);
    localStorage.setItem(SAVED_CNTRY, selectedCountry);
}

function loadCountries() {
    const savedCountry = localStorage.getItem(SAVED_CNTRY);
    if(savedCountry !== null) {
        const option = document.querySelector(`option[value="${selected}"]`);
        option.savedCountry = true;
    }
};

loadCountries();
selector.addEventListener("change",handleChange);



// [ SOLUTION ]

// import "./styles.css";

// const select = document.querySelector(".js-select");

// function handleChange() {
//   const selected = select.value;
//   localStorage.setItem("country", selected);
// }

// function loadCountries() {
//   const selected = localStorage.getItem("country");
//   if (selected) {
//     const option = document.querySelector(`option[value="${selected}"]`);
//     option.selected = true;
//   }
// }

// loadCountries();
// select.addEventListener("change", handleChange);
