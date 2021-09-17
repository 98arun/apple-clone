console.log("hey");
// this function animate the body text
function animate() {
  document.getElementById("main").style.width = "100%";
}
//this code is for aside dropdown
let click = document.querySelector(".drop");
let item = document.querySelector(".dropdown-hidden");
let rotate = document.getElementById("rotate");

click.addEventListener("click", () => {
  // item.classList.toggle("dropdown-hidden");
  if (!item.style.display || item.style.display === "none") {
    item.style.display = "flex";
    rotate.style.transform = "rotate(270deg)";

    return;
  }
  item.style.display = "none";
  rotate.style.transform = "rotate(90deg)";
});
// this code is for aside bar to hide
let asideClose = document.querySelector(".close-icon");
let aside = document.querySelector("aside");
asideClose.addEventListener("click", () => {
  aside.style.display = "none";
});
//this code is for list items to hide/show
let mac = document.querySelector(".hover-mac");
let elementMac = document.querySelector(".mac");
mac.addEventListener("click", (e) => {
  e.preventDefault(e);
  // console.log("clicked1", elementMac.style.display);
  if (!elementMac.style.display || elementMac.style.display === "none") {
    elementMac.style.display = "flex";
    elementIpad.style.display = "none";
    elementIphone.style.display = "none";
    elementWatch.style.display = "none";
    elementTv.style.display = "none";
    elementMusic.style.display = "none";
    return;
  }
  elementMac.style.display = "none";

  // if (!elementMac.style.display || elementMac.style.display == "none") {
  //   elementMac.style.display = "flex";
  //   elementIpad.style.display = "none";

  //   console.log("clicked2");
  // } else {
  //   elementMac.style.display = "none";
  // }
});
let ipad = document.querySelector(".hover-ipad");
let elementIpad = document.querySelector(".ipad");
ipad.addEventListener("click", (e) => {
  e.preventDefault(e);

  if (!elementIpad.style.display || elementIpad.style.display === "none") {
    elementIpad.style.display = "flex";
    elementMac.style.display = "none";
    elementIphone.style.display = "none";
    elementWatch.style.display = "none";
    elementTv.style.display = "none";
    elementMusic.style.display = "none";
    return;
  }
  elementIpad.style.display = "none";
});
let iphone = document.querySelector(".hover-iphone");
let elementIphone = document.querySelector(".iphone");
iphone.addEventListener("click", (e) => {
  e.preventDefault(e);
  if (!elementIphone.style.display || elementIphone.style.display === "none") {
    elementIphone.style.display = "flex";
    elementIpad.style.display = "none";
    elementMac.style.display = "none";
    elementWatch.style.display = "none";
    elementTv.style.display = "none";
    elementMusic.style.display = "none";
    return;
  }
  elementIphone.style.display = "none";
});
let watch = document.querySelector(".hover-watch");
let elementWatch = document.querySelector(".watch");
watch.addEventListener("click", (e) => {
  e.preventDefault(e);
  if (!elementWatch.style.display || elementWatch.style.display === "none") {
    elementWatch.style.display = "flex";
    elementIpad.style.display = "none";
    elementIphone.style.display = "none";
    elementMac.style.display = "none";
    elementTv.style.display = "none";
    elementMusic.style.display = "none";
    return;
  }
  elementWatch.style.display = "none";
});
let tv = document.querySelector(".hover-tv");
let elementTv = document.querySelector(".tv");
tv.addEventListener("click", (e) => {
  e.preventDefault(e);
  if (!elementTv.style.display || elementTv.style.display === "none") {
    elementTv.style.display = "flex";
    elementIpad.style.display = "none";
    elementIphone.style.display = "none";
    elementWatch.style.display = "none";
    elementMac.style.display = "none";
    elementMusic.style.display = "none";
    return;
  }
  elementTv.style.display = "none";
});
let music = document.querySelector(".hover-music");
let elementMusic = document.querySelector(".music");
music.addEventListener("click", (e) => {
  e.preventDefault(e);
  if (!elementMusic.style.display || elementMusic.style.display === "none") {
    elementMusic.style.display = "flex";
    elementIpad.style.display = "none";
    elementIphone.style.display = "none";
    elementWatch.style.display = "none";
    elementTv.style.display = "none";
    elementMac.style.display = "none";
    return;
  }
  elementMusic.style.display = "none";
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
const checkpoint = 320;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  // console.log(currentScroll);
  if (currentScroll >= checkpoint) {
    opacity = 1 - checkpoint / currentScroll;
    // console.log(opacity);
  } else {
    opacity = 0;
  }
  document.querySelector(".body-para").style.opacity = opacity + 0.3;
});
// this code is for cart hide/show
let bag = document.getElementById("bag-icon");
let bagContent = document.getElementById("bag");

bag.addEventListener("click", (e) => {
  e.preventDefault(e);
  if (!bagContent.style.display || bagContent.style.display === "none") {
    bagContent.style.display = "block";
    return;
  }
  bagContent.style.display = "none";
});
