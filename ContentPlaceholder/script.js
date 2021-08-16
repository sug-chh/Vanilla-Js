const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile_img");
const nameEl = document.getElementById("name");
const dateEl = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `<img
    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
    alt=""
  />`;
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
  laborum?`;
  profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
  nameEl.innerHTML = "Jon Doe";
  dateEl.innerHTML = `August 15, 2021`;
  animatedBgs.forEach((animatedBg) =>
    animatedBg.classList.remove("animated-bg")
  );
  animatedBgTexts.forEach(animatedBgText => animatedBgText.classList.remove('animated-bg-text'))
}
