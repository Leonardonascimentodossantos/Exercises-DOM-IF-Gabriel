const alertbtn = document.querySelector("#alertbtn");
const inputElement = document.getElementById('unfocus');
const container = document.querySelector("#container");
const addbtn = document.querySelector("#addbtn");
const counterDisplay = document.querySelector("#counter");
const changeableText = document.getElementById('changeable-text');

let count = 0;

function mouseover() {
    container.style.backgroundColor = "yellow"
};
function mouseout() {
    container.style.backgroundColor = "red"
};
function blurfunction() {
    console.log(this.value);
};
function alertmessage() {
    alert ("Alerta")
};
function incrementCounter() {
    count++;
    counterDisplay.textContent = count;
}
function changeh1(event) {
    if (event.key === 'Enter') {
          changeableText.textContent = `Tecla pressionada: ${event.key} (Código: ${event.code})`
    }
}

alertbtn.addEventListener ("click", alertmessage);
inputElement.addEventListener('blur', blurfunction);
container.addEventListener("mouseover", mouseover);
container.addEventListener("mouseout", mouseout)
addbtn.addEventListener("click", incrementCounter);
document.addEventListener('keydown', changeh1);

counterDisplay.textContent = count;