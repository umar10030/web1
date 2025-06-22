/*function clearscreen() {
    document.getElementById("output").innerHTML = "";
}

function setScreenValue(value) {
    document.getElementById("output").innerHTML += value;
}

function calculateResult() {
    const resulElement = document.getElementById("output");
    const expression = resulElement.value.trim();


if (expression === '') {
    resulElement.value = eval(expresion);
}

try {
    resulElement.value = eval(expression);
}
catch (e) {
    resulElement.value = 'invalid expression';
}
}*/

var index = 0;
function carousel(){
var i;
var x = document.getElementsByClassName("myslide");
for (i= 0; i < x. length; i++) {
x[i].style.display = "none";
}

index++;
if (index > x. length) {
index = 1;
}
x[index -1].style.display = "block";
setTimeout(carousel, 2000);
}
carousel(); // Start the carousel when the page loads