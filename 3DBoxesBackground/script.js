const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));

function createBoxes() {
  // <div class="box" style="background-position: 0 0;"></div>
  //     <div class="box" style="background-position: -125px 0;"></div>
  //     <div class="box" style="background-position: -250px 0;"></div>
  //     <div class="box" style="background-position: -375px 0;"></div>
  //     <div class="box" style="background-position: 0 -125px;"></div>
  //     <div class="box" style="background-position: -125px -125px;"></div>
  //     <div class="box"></div>
  //     <div class="box"></div>
  //     <div class="box"></div>
  //     <div class="box"></div>
  //     <div class="box"></div>
  //     <div class="box"></div>
  //     <div class="box"></div>
  //     <div class="box"></div>
  //     <div class="box"></div>
  //     <div class="box"></div>

  //  This for loop is doing the above calculation.
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();
