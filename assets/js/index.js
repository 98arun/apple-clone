console.log("hey");
let click = document.querySelector(".drop");
let item = document.querySelector(".dropdown-hidden");
click.addEventListener("click", () => {
  item.classList.toggle("dropdown-hidden");
  let rotate = document.getElementById("rotate");
  rotate.style.transform = "rotate(270deg)";
});
let asideClose = document.querySelector(".close-icon");
let aside = document.querySelector("aside");
asideClose.addEventListener("click", () => {
  aside.style.display = "none";
});
