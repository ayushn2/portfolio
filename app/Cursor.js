const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#F5F5F5", "#E6E6E6", "#D9D9D9", "#CCCCCC", "#BFBFBF",
    "#B3B3B3", "#A6A6A6", "#999999", "#8C8C8C", "#808080",
    "#737373", "#666666", "#595959", "#4D4D4D", "#404040",
    "#333333", "#262626", "#1A1A1A", "#0D0D0D", "#000000",
    "#050505", "#0A0A0A", "#0F0F0F", "#141414", "#191919"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
