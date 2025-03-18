const paragraph = document.querySelector("#paragraph");
const container = document.querySelector("#container");
const changecolorBtn = document.querySelector("#changecolorBtn")
const noneBtn = document.querySelector("#noneBtn")

paragraph.style.fontSize = "30px";

function nonefunction () {
    if (paragraph.style.display === "") {
    paragraph.style.display = "none";
    } else {
        paragraph.style.display = "";
    }
}

noneBtn.addEventListener("click", nonefunction)

function changecolor () {
    if (container.style.backgroundColor === "red") {
        container.style.backgroundColor = "yellow";
    } else if (container.style.backgroundColor === "yellow") {
        container.style.backgroundColor ="green";
    } else {
        container.style.backgroundColor = "red";
    }
}

changecolorBtn.addEventListener("click", changecolor);