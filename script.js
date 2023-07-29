"use strict";

const body = document.querySelector("body"),
  darkToggle = document.querySelector(".darkLight"),
  darkToggle2 = document.querySelector(".darkLight2"),
  hideNavbar = document.querySelector(".allMenu"),
  mainNavbar = document.querySelector(".mainMenu"),
  main = document.querySelector("main"),
  footer = document.querySelector("footer");

// js code to get user selected mode after page refresh or file reopen
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

// js code to toggle dark and light mode
let toggler = () => {
  document.body.classList.toggle("dark");

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
};

darkToggle.addEventListener("click", toggler);
darkToggle2.addEventListener("click", toggler);

// js responsive navigation bar
hideNavbar.addEventListener("click", () => {
  mainNavbar.classList.toggle("active");

  if (mainNavbar.classList.contains("active")) {
    main.classList.add("overlay");
  }
});

//js click on body close responsive navigation bar
let closer = () => {
  if (main.classList.contains("overlay")) {
    mainNavbar.classList.remove("active");
    main.classList.remove("overlay");
  }
};
main.addEventListener("click", closer);
footer.addEventListener("click", closer);
