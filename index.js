const title = document.querySelector("#title");

const CLIKCED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLIKCED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
