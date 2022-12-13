class Storage {
  static getUsersFromStorage() {
    let users;
    if (localStorage.getItem("searched") === null) {
      //searched bizim key değerimiz.
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("searched"));
    }
    return users; //users arrayini döndür.users bir value arrayi
  }
  static addUsersToStorage(username) {
    let users = Storage.getUsersFromStorage(); //users arrayini aldık.
    if (users.indexOf(username) === -1) {
      users.push(username);
    }
    localStorage.setItem("searched", JSON.stringify(users));
  }
  static removeUserFromStorage() {
    localStorage.removeItem("searched");
  }
}
