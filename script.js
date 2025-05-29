const body = document.body;
const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");
const pinkButton = document.getElementById("pinkButton");
const blackButton = document.getElementById("blackButton");
const h1 = document.getElementById("myText");

redButton.onclick = function () {
  body.style = "background-color: red";
};

blueButton.onclick = function () {
  body.style = "background-color: blue";
};

pinkButton.onclick = function () {
  body.style = "background-color: pink";
};

blackButton.onclick = function () {
  h1.style = "color: white";
  body.style = "background-color: black";
};
