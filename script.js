const btn = document.getElementById("btn");
const mensagem = document.getElementById("mensagem");
const hearts = document.querySelector(".hearts");

btn.addEventListener("click", () => {

  mensagem.style.display = "block";

});

function criarCoracao(){

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  },6000);

}

setInterval(criarCoracao,250);