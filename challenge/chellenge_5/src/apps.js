import { visitFunctionBody } from "typescript";
import "./styles.css";

const selector = document.querySelector(".js-select");
const paint = document.createElement("span");
const SAVED_CNTRY = "country";
function loadCountries() {
    const selectedCountry = selector.value;
    paint.innerText = selectedCountry;
    document.body.appendChild(paint);
    localStorage.setItem(SAVED_CNTRY, selectedCountry);
}

function updateCountry() {
    localStorage.removeItem(SAVED_CNTRY);
    localStorage.setItem(SAVED_CNTRY, username);

}

loadCountries();
selector.addEventListener("change",loadCountries);


const savedCountry = localStorage.getItem(SAVED_CNTRY);
if(savedCountry===null){
    loadCountries();

}


