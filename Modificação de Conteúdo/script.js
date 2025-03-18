const text0 = document.querySelector("#text0");
const text1 = "Texto original HTML";
const text2 = "Texto atualizado pelo JavaScript";
const toggleButton = document.querySelector("#toggleButton");

const div = document.querySelector("div")

function alterntext() {
    if (text0.textContent === text1) {
        text0.textContent = text2; 
    } else {
        text0.textContent = text1; 
    }
}

toggleButton.addEventListener("click", alterntext);

const newHTML = `
<h1>NOVO</h1>
`;

div.innerHTML = newHTML;