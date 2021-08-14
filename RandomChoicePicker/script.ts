const tagsEl: HTMLElement = document.getElementById("tags");
const textarea: HTMLElement = document.getElementById("textarea");

// All the function declarations

function createTags(input: string): void {
  const tags: string[] = input
    .split(",")
    .filter((tag) => {
      return tag.trim() !== "";
    })
    .map((tag) => {
      return tag.trim();
    });

  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl: HTMLElement = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function pickRandomTag(): Node {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, 100 * times);
}

textarea.focus();
textarea.addEventListener("keyup", function (e) {
  createTags((<HTMLInputElement>e.target).value);
  if (e.key == "Enter") {
    setTimeout(() => {
      (<HTMLInputElement>e.target).value = "";
    }, 10);
    randomSelect();
  }
});
