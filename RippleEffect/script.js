const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    console.log(xInside, yInside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";
    // It can be done as this.appendChild(circle) as well until and unless its a regular function and not an arrow function. It's because I am working with a single button element so this works like a placeholder for the button.
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
  });
});
