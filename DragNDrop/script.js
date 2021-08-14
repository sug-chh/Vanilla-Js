const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

function dragStart() {
  console.log("Drag start");
  this.className += " hold";
  setTimeout(() => {
    this.className = "";
  }, 0);
}
function dragEnd() {
  this.className = "fill";
}
function dragOver(e) {
  console.log("Drag over");
  e.preventDefault();
}
function dragEnter(e) {
  console.log("Drag enter");
  e.preventDefault();
  this.className += ' hovered'
}
function dragLeave() {
  console.log("Drag leave");
  this.className = 'empty'
}
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
