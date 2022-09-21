/*
 * Make the same toggle functionality using Jquery instead of pure JS
*/

// One img toggle
let toggleOne = document.querySelector("#toggleOne");
toggleOne.addEventListener("click", toggleOneAction);
function toggleOneAction() {
  if (document.querySelector("#img1").style.display == "none") {
    document.querySelector("#img1").style.display = "inline";
  } else {
    document.querySelector("#img1").style.display = "none";
  }
}


// All imgs toggle
let toggleAll = document.querySelector("#toggleAll");
toggleAll.addEventListener("click", toggleAllAction);
function toggleAllAction() {
  let imgs = document.querySelectorAll("img");
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].style.display == "none") {
      imgs[i].style.display = "inline";
    } else {
      imgs[i].style.display = "none";
    }
  }
}

// Make function for toggle JS
function toggleTwoAction(ele) {
  if (ele.style.display == "none") {
    ele.style.display = "inline";
  } else {
    ele.style.display = "none";
  }
}

let toggleTwo = document.querySelector("#toggleTwo");
toggleTwo.addEventListener("click", function () {
  let img = document.querySelector("#img2");
  toggleTwoAction(img);
});
