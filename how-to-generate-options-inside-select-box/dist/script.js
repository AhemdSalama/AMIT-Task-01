$(function () {
  "use strict";
  for (var i = 1; i <= 31; i++) {
    $("<option>", {value: i, text: i}).appendTo($("#days"));
  }
});

let select = document.getElementById("daysJS");
for (var i = 1; i <= 31; i++) {
  let newOption = document.createElement("option");
  newOption.value = i;
  newOption.text = i;
  select.appendChild(newOption);
}