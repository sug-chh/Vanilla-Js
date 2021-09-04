const imgContainer = document.getElementById("imgs");
const prev = document.getElementById("left");
const next = document.getElementById("right");
const img_length = document.querySelectorAll("img").length;

// My Logic
// let index = 0;

// function forward() {
//   if (index >= img_length - 1) {
//     index = 0;
//   } else {
//     index += 1;
//   }
//   console.log(index);
//   imgContainer.style.transform = `translateX(-${index * 500}px)`;
// }

// function backward() {
//   if (index <= 0) {
//     index = img_length - 1;
//   } else {
//     index -= 1;
//   }
//   console.log(index);
//   imgContainer.style.transform = `translateX(-${index * 500}px)`;
// }

// function resetInterval() {
//   clearInterval(interval);
//   interval = setInterval(forward, 2000);
// }

// let interval = setInterval(forward, 2000);

// next.addEventListener("click", () => {
//   forward();
//   resetInterval();
// });
// prev.addEventListener("click", () => {
//   backward();
//   resetInterval();
// });



// Brad's Logic
let idx = 0;
let interval = setInterval(run, 2000);
function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img_length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img_length - 1;
  }
  imgContainer.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

next.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

prev.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
