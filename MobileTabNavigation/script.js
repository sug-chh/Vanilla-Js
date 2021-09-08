const lists = document.querySelectorAll("nav ul li");
const images = document.querySelectorAll(".content");

// My Logic
lists.forEach((list, idx) => {
  list.addEventListener("click", () => {
    removeActiveClasses();
    list.classList.add("active");
    images[idx].classList.add("show");
  });
});

function removeActiveClasses() {
  for (let i = 0; i < images.length; i++) {
    lists[i].classList.remove("active");
    images[i].classList.remove("show");
  }
}
