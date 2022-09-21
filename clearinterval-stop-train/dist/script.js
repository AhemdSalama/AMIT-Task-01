let seconds = 0;

let div = document.getElementById("myDiv");

div.innerHTML = seconds;

document.getElementById("start").onclick = function () {
  setInterval(counter, 1000);
};

function counter() {
  seconds += 1;
  div.innerHTML = seconds;
}