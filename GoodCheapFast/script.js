const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", function (e) {
    if (good.checked && cheap.checked && fast.checked) {
      console.log(e.target);
      if (e.target === good) {
        fast.checked = false;
      }
      if (e.target === cheap) {
        good.checked = false;
      }
      if (e.target === fast) {
        cheap.checked = false;
      }
    }
  })
);
