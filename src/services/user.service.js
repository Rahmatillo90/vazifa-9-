import Io from "../utils/io.js";

class userService {
  constructor() {
    this.fileSystem = new Io("src/data/users.json");
  }
  async getAllUsers() {
    const users = await this.fileSystem.redfile();
    return users;
  }

  async getActiveUser() {
    const users = await this.getAllUsers();
    return users.filter((user) => user.status === "active");
  }

  async getUserById(id) {
    const users = await this.getAllUsers();
    return users.find((user) => user.id === id);
  }

  async addUser(body) {
    const users = await this.getAllUsers();
    const newUSer = {
      id: users.length + 1,
      username: body.username,
      email: body.email,
      age: body.age,
      status: "active",
    };
    users.push(newUSer);
    await this.fileSystem.writeFile(users);
    return newUSer;
  }
  async searchUsers(query) {
    const users = await this.getAllUsers();
    return users.filter((user) =>
      Object.values(user).some((value) =>
        value.toString().tolowerCase().includes(query.tolowerCase())
      )
    );
  }
}

export default userService;
