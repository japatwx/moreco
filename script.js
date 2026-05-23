const button = document.getElementById("openMessage");
const loveSection = document.getElementById("loveSection");
const heartsContainer = document.querySelector(".hearts");

button.addEventListener("click", () => {

  loveSection.classList.remove("hidden");

  loveSection.scrollIntoView({
    behavior: "smooth"
  });

});

function createHeart(){

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = Math.random() * 25 + 15 + "px";

  heart.style.animationDuration = Math.random() * 5 + 5 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  },10000);

}

setInterval(createHeart,300);