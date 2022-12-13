const gitform = document.querySelector("#github-form");
const gitInput = document.querySelector("#githubname");
const lastUsers = document.querySelector("#last-users");
const clearButton = document.querySelector("#clear-last-users");
const github = new Github();
const ui = new UI();

addEvents();

function addEvents() {
  clearButton.addEventListener("click", clearUsers);
  gitform.addEventListener("submit", getData);
  document.addEventListener("DOMContentLoaded", loadUsers);
}
function getData(e) {
  let username = gitInput.value.trim();
  github.getGitData(username).then((response) => {
    if (response.userDatas.message === "Not Found") {
      alert(new Error("kullanıcı bulunamadı."));
    } else {
      ui.addUsersToUi(username);
      Storage.addUsersToStorage(username);

      ui.addDatas(response.userDatas);
      ui.addRepos(response.userRepos);
    }
  });
  ui.clearInput();

  e.preventDefault();
}
function clearUsers() {
  Storage.removeUserFromStorage();
  ui.clearUsersFromUi();
}
function loadUsers() {
  let users = Storage.getUsersFromStorage();
  let result = "";
  users.forEach((user) => {
    result += `<li class="list-group-item">${user}</li>`;
  });
  lastUsers.innerHTML = result;
}
