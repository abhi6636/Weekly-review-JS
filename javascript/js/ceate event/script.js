var heading = document.getElementById("heading");
var btn = document.getElementById('btn');

btn.addEventListener("click", changeClr);

function changeClr() {
    heading.style.color = "red";

}

heading.addEventListener("mouseover",changeBg);
function changeBg() {
    heading.style.backgroundColor = "yellow";
}