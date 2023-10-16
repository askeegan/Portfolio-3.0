/* Auto Typed */

let autoType = document.querySelector(".auto-type");
if (autoType) {
  var typed = new Typed(".auto-type", {
    strings: [
      " I'm Alejandro Keegan",
      " A Full Stack Developer",
      " Based in Germany",
    ],
    typeSpeed: 100,
    backSpeed: 20,
    loop: true,
  });
}

/* Hamburger Menu */

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar-1");

const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

/* Cards Carousel */

const cardsContainer = document.querySelector(".cards");
const cardContainers = document.querySelectorAll(".container");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let currentPairIndex = 0;
let isTransitioning = false;

function showCardPair(pairIndex) {
  const startIndex = pairIndex * 2;
  cardContainers.forEach((container, i) => {
    if (i === startIndex || i === startIndex + 1) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });
}

function prevButtonClickHandler() {
  if (!isTransitioning) {
    currentPairIndex =
      (currentPairIndex - 1 + Math.ceil(cardContainers.length / 2)) %
      Math.ceil(cardContainers.length / 2);
    isTransitioning = true;
    showCardPair(currentPairIndex);
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }
}

function nextButtonClickHandler() {
  if (!isTransitioning) {
    currentPairIndex =
      (currentPairIndex + 1) % Math.ceil(cardContainers.length / 2);
    isTransitioning = true;
    showCardPair(currentPairIndex);
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }
}

function enableGame() {
  if (window.innerWidth > 838) {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
    prevBtn.addEventListener("click", prevButtonClickHandler);
    nextBtn.addEventListener("click", nextButtonClickHandler);

    showCardPair(currentPairIndex);
  } else {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    prevBtn.removeEventListener("click", prevButtonClickHandler);
    nextBtn.removeEventListener("click", nextButtonClickHandler);
  }
}

window.addEventListener("resize", enableGame);

enableGame();

/* Preventing Button Default Behavior to Avoid Scrolling to Top */

document.getElementById("prevBtn").addEventListener("click", (event) => {
  event.preventDefault();
  currentPairIndex =
    (currentPairIndex - 1 + Math.ceil(cards.length / 2)) %
    Math.ceil(cards.length / 2);
  showCardPair(currentPairIndex);
});

document.getElementById("nextBtn").addEventListener("click", (event) => {
  event.preventDefault();
  currentPairIndex = (currentPairIndex + 1) % Math.ceil(cards.length / 2);
  showCardPair(currentPairIndex);
});
