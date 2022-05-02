const openMenu = document.getElementById("hamburger");
openMenu.addEventListener ("click", showLinks);

function showLinks () {
	document.querySelector(".nav-links_shell-mobile").classList.toggle("nav-links_shell-mobile-show");
}

const hamburger = document.getElementById("hamburger_shell");
openMenu.addEventListener ("click", invert);

function invert () {
	document.querySelector(".hamburger:first-child").classList.toggle("hamburger-first-child");
  document.querySelector(".hamburger:nth-child(2)").classList.toggle("hamburger-nth-child");
  document.querySelector(".hamburger:last-child").classList.toggle("hamburger-last-child");
}