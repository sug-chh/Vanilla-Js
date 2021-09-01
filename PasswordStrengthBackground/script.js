const background = document.getElementById("background");
const password = document.getElementById("password");

password.addEventListener("input", (e) => {
  pass_len = e.target.value.length;
  background.style.filter = `blur(${20 - pass_len * 2}px)`;
});
