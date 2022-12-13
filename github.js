class Github {
  constructor() {
    this.url = "https://api.github.com/users/";
  }
  async getGitData(username) {
    const response = await fetch(this.url + username);
    const dataUser = await response.json();

    const response2 = await fetch(this.url + username + "/repos");
    const userRepos = await response2.json();

    return {
      userDatas: dataUser,
      userRepos: userRepos,
    };
  }
}
