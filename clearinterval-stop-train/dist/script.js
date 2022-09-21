let seconds = 0;
let div = document.getElementById("myDiv");

div.innerHTML = seconds;

// document.getElementById("start").onclick = function () {
//  timer= setInterval(counter, 1000);
// };
timer=clearInterval(setInterval(counter, 1000))

function counter() {
  seconds += 1;
  div.innerHTML = seconds;
}

function startCounter(){
    console.log("start")
    timer= setInterval(counter, 1000);

}
function stopCounter(){
    console.log("stop")
    clearInterval(timer);
}
function resetCounter(){
    seconds = 0;
    div.innerHTML = seconds;
}