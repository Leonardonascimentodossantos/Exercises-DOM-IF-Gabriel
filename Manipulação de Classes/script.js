const paragraph = document.querySelector("p");
const btn = document.querySelector("#btn");
const btnAddp = document.querySelector("#btnAddp");
const btnRmvp = document.querySelector('#btnRmvp')
const container = document.querySelector("#container")

function changeclass () {
    if (paragraph.className === "classadd0") {
        paragraph.className = "classadd";  
    } else {
        paragraph.className = "classadd0";
    }
};

function removeclass () {
    paragraph.className = "";
    btn.classList.toggle('ativo');
};

function addp () {
    const newp = document.createElement('p');
    newp.textContent = "Novo";
    container.appendChild(newp)
}

function rmvp () {
    const paragraphs = container.querySelectorAll('p');
    if (paragraphs.length > 0) {
        const lastparagraph = paragraphs[paragraphs.length - 1];
        container.removeChild(lastparagraph);
    } else {
        alert ("Não há mais parágrafos");
    }
}

paragraph.addEventListener ("click", changeclass);
btn.addEventListener ("click", removeclass);
btnAddp.addEventListener ("click", addp);
btnRmvp.addEventListener ("click", rmvp);
