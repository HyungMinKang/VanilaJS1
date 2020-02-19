const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `Images/${imgNumber + 1}.jpg`;
  body.prepend(image);
  image.classList.add("bgImage");
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
