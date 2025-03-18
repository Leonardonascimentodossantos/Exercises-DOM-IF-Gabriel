const element = document.querySelector("#element");
const paragraphs = document.querySelectorAll("p");
const first = document.querySelector("#first")

first.innerHTML = "Modificando"
// Itera sobre cada elemento <p> e muda a cor para azul
paragraphs.forEach(p => {
  p.style.color = "blue";
});

console.log(element)
console.log(element.textContent)