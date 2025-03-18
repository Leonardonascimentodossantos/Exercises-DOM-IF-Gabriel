const image = document.querySelector("img")
const negative = "https://img.freepik.com/vetores-premium/polegares-para-baixo-o-vetor-isolado-do-circulo-vermelho-nao-gosta-de-sinais-de-midia-social_606575-409.jpg"
const ancor = document.querySelector("a")


image.addEventListener("mouseover", function () {
    image.src = negative;
})

image.addEventListener("mouseout", function (){
    image.src = "https://thumbs.dreamstime.com/b/%C3%ADcone-de-vetor-positivo-polegar-ilustra%C3%A7%C3%A3o-plana-do-desenho-ic%C3%B4nico-plano-isolado-sobre-fundo-branco-228590883.jpg" ;
})

ancor.addEventListener("mouseover", function(){
    ancor.href = "";
})