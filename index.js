const num1 = Math.floor(Math.random() * 6) + 1;
const num2 = Math.floor(Math.random() * 6) + 1;
var name1 = "images/D" + num1 + ".png";
var name2 = "images/D" + num2 + ".png";
var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];
img1.setAttribute("src", name1);
img2.setAttribute("src", name2);
if (num1>num2) {
    document.querySelector("H1").innerHTML = "🚩Player 1 Wins";
} else if (num2>num1) {
    document.querySelector("H1").innerHTML = "Player 2 Wins🚩";
} else {
    document.querySelector("H1").innerHTML = "No One Wins";
}