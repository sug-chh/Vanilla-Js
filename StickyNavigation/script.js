const nav = document.querySelector(".nav");
window.addEventListener("scroll", function () {
  console.log(window.scrollY, nav.offsetHeight + 100);
  if (window.scrollY > nav.offsetHeight + 100) {
    console.log("Yes");
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
