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
let mac = document.querySelector(".hover-mac");
let elementMac = document.querySelector(".mac");
mac.addEventListener("click", (e) => {
  e.preventDefault(e);
  elementMac.style.display = "flex";
  elementIpad.style.display = "none";
  elementIphone.style.display = "none";
  elementWatch.style.display = "none";
  elementTv.style.display = "none";
  elementMusic.style.display = "none";
});
let ipad = document.querySelector(".hover-ipad");
let elementIpad = document.querySelector(".ipad");
ipad.addEventListener("click", (e) => {
  e.preventDefault(e);
  elementIpad.style.display = "flex";
  elementMac.style.display = "none";
  elementIphone.style.display = "none";
  elementWatch.style.display = "none";
  elementTv.style.display = "none";
  elementMusic.style.display = "none";
});
let iphone = document.querySelector(".hover-iphone");
let elementIphone = document.querySelector(".iphone");
iphone.addEventListener("click", (e) => {
  e.preventDefault(e);
  elementIphone.style.display = "flex";
  elementMac.style.display = "none";
  elementIpad.style.display = "none";
  elementWatch.style.display = "none";
  elementTv.style.display = "none";
  elementMusic.style.display = "none";
});
let watch = document.querySelector(".hover-watch");
let elementWatch = document.querySelector(".watch");
watch.addEventListener("click", (e) => {
  e.preventDefault(e);
  elementWatch.style.display = "flex";
  elementMac.style.display = "none";
  elementIpad.style.display = "none";
  elementIphone.style.display = "none";
  elementTv.style.display = "none";
  elementMusic.style.display = "none";
});
let tv = document.querySelector(".hover-tv");
let elementTv = document.querySelector(".tv");
tv.addEventListener("click", (e) => {
  e.preventDefault(e);
  elementTv.style.display = "flex";
  elementMac.style.display = "none";
  elementIpad.style.display = "none";
  elementIphone.style.display = "none";
  elementWatch.style.display = "none";
  elementMusic.style.display = "none";
});
let music = document.querySelector(".hover-music");
let elementMusic = document.querySelector(".music");
music.addEventListener("click", (e) => {
  e.preventDefault(e);
  elementMusic.style.display = "flex";
  elementMac.style.display = "none";
  elementIpad.style.display = "none";
  elementIphone.style.display = "none";
  elementWatch.style.display = "none";
  elementTv.style.display = "none";
});
let searchBtn = document.getElementById("search");
let closeBtn = document.getElementById("close");
searchBtn.addEventListener("click", (e) => {
  e.preventDefault(e);
  let searchContainer = document.querySelector(".search-container");
  let nav = document.getElementById("nav-hidden");
  searchContainer.style.display = "block";
  nav.style.display = "none";
});
closeBtn.addEventListener("click", (e) => {
  e.preventDefault(e);
  let searchContainer = document.querySelector(".search-container");
  let nav = document.getElementById("nav-hidden");
  searchContainer.style.display = "none";
  nav.style.display = "flex";
});
