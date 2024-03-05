var main = document.querySelector("#main");
var point = document.querySelector(".pointer");

main.addEventListener("mousemove", function(dets){
    point.style.left = dets.x+"px"
    point.style.top = dets.y+"px"
})