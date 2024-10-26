let i = 0;
let body = document.querySelector("body");
let aqua = document.querySelector(".aqua");
let percentBar = document.querySelector(".percentBar");
let number = document.querySelector(".number");
let h2 = document.querySelector("h2");

let interval = setInterval(function () {
  number.innerHTML = i + "<span>%</span>";
  percentBar.style.width = i + "%";
  i++;
  if (i == 101) {
    clearInterval(interval);
    setTimeout(function () {
      aqua.style.opacity = "0";
      aqua.style.visibility = "hidden";
      body.style.background = "#000";
      h2.style.opacity = "1";
      h2.style.visibility = "visible";
    });
  }
}, 100);
