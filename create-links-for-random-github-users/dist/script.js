/*
 * Using JS make this array of users existing in the HTML using the same structure of the example user link
 * First level use the users variable
 * Second level use Ajax and get users from this link
 * - https://api.github.com/users/
 */

let users = ["OsamaElzero", "dmalan", "taylorotwell", "themsaid", "freekmurze"];

// Fetch api
SW();
async function SW() {
  const response = await fetch("https://api.github.com/users");
  data = await response.json();

  let randomNumber = Math.floor(Math.random() * (data.length - 1));
  document.getElementById("link").href ="https://github.com/" + data[randomNumber].login;
  document.getElementById("link").innerText = data[randomNumber].login;

}

// let randomNumber = Math.floor(Math.random() * (users.length-1));
// console.log(randomNumber)
// document.getElementById('link').href = "https://github.com/"+ users[randomNumber];
// document.getElementById('link').innerText =  users[randomNumber];
