const button = document.getElementById("btn");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

button.addEventListener("click", () =>
  createNotification((message = "Your Order is Deliverd!"), (type = "success"))
);

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : "info");
  notif.innerText = message
    ? message
    : messages[Math.floor(Math.random() * messages.length)]; //Random message
  toasts.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 3000);
}
