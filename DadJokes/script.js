const jokeEl = document.getElementById("joke");
const jokebtn = document.getElementById("joke-btn");

async function generateJoke() {
  data = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const { joke } = await data.json();
  jokeEl.innerHTML = joke;
}

generateJoke();

jokebtn.addEventListener("click", function () {
  generateJoke();
});
