const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout-button")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
    quote.classList.remove(HIDDEN_CLASSNAME);
    author.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.addEventListener("click",onLogoutClick);   
}

function onLogoutClick(){
    greeting.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    clock.classList.add(HIDDEN_CLASSNAME);
    quote.classList.add(HIDDEN_CLASSNAME);
    author.classList.add(HIDDEN_CLASSNAME);
    paintLoginForm();
    
}
function paintLoginForm(){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    paintLoginForm();
} else {
    paintGreetings(savedUsername);
};
