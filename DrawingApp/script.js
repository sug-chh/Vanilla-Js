const canvas = document.getElementById("canvas");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearBtn = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let color = "black";
let size = 20;
let isPressed = false;
let x;
let y;

// Draws circle on the canvas
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(
    (x = x),
    (y = y),
    (radius = size),
    (startAngle = 0),
    (endAngle = Math.PI * 2)
  );
  ctx.fillStyle = color;
  ctx.fill();
}
// Draws line on the canvas
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo((x = x1), (y = y1));
  ctx.lineTo((x = x2), (y = y2));
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
// Updates the span element with the current size
function updateSizeOnScreen() {
  sizeEl.innerHTML = size;
}

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

decrease.addEventListener("click", function () {
  size--;
  if (size <= 0) {
    size = 1;
  }
  updateSizeOnScreen();
});

increase.addEventListener("click", function () {
  size++;
  if (size > 50) {
    size = 50;
  }
  updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

clearBtn.addEventListener("click", function () {
  ctx.clearRect((x = 0), (y = 0), (w = canvas.width), (h = canvas.height));
});
