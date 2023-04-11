function showCallout() {
    var calloutBox = document.getElementById("callout-box");
    calloutBox.style.display = "block";
    setTimeout(function() {
        calloutBox.style.display = "none";
    }, 2000);
}

function showLists() {
    var list = document.getElementById("showList");
    list.style.display = "block";
    setTimeout(function() {
        list.style.display = "none";
    }, 3000);
}

function hideLists() {
    var hideList = document.getElementById("showList");
    hideList.style.display = "none";
}


function clicked(){
    alert("അയ്യോ ഞാൻ പെട്ടു")
}
const swipp = document.querySelector("#swipper");

swipp.addEventListener("mouseover", function () {
swipp.style.display = "none";
setTimeout(() => {
  swipp.style.display = "block";
  swipp.style.top = Math.random() * window.innerHeight + "px";
  swipp.style.left = Math.random() * window.innerWidth + "px";
}, 500);
});