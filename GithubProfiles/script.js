const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios.get(APIURL + username);
    createUserCard((user = data));
    console.log(data);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard((message = "No profile with this username!"));
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(APIURL + username + "/repos?sort=created");
    console.log(data);
    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem fetching the repos!");
  }
}

function createUserCard(user) {
  const cardHTML = `<div class="card">
<div>
  <img
    src=${user.avatar_url}
    alt="${user.login}"
    class="avatar"
  />
</div>
<div class="user-info">
  <h2>${user.name}</h2>
  <p>
   ${user.bio}
  </p>
  <ul>
    <li>${user.followers} <strong>Followers</strong></li>
    <li>${user.following} <strong>Following</strong></li>
    <li>${user.public_repos} <strong>Repos</strong></li>
  </ul>
  <div id="repos">
  </div>
</div>
</div>`;

  main.innerHTML = cardHTML;
}

function createErrorCard(message) {
  const cardHTML = `
<div class="card">
<h1>${message}</h1>
</div>
`;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 10).forEach((repo) => {
    const repoLink = document.createElement("a");
    repoLink.classList.add("repo");
    repoLink.href = repo.html_url;
    // This piece of code opens the link in another window
    repoLink.target = "_blank";
    repoLink.innerText = repo.name;
    reposEl.appendChild(repoLink);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser((username = user));
    getRepos((username = user));
    search.value = "";
  }
});
