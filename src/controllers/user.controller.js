import { json } from "express";
import userService from "../services/user.service.js";

class userController {
  constructor() {
    this.userService = new userService();
  }

  async getAllUsersController(req, res) {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getActiveUserController(req, res) {
    try {
      const activeUser = await this.userService.getActiveUser();
      res.json(activeUser);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getUserByIdController(req, res) {
    const { id } = req.params;
    const user = await this.userService.getUserById(Number(id));
    if (user) res.json(user);
    else res.status(400).json({ message: "user not found" });
  }

  async addUserController(req, res) {
    const newUSer = await this.userService.addUser(req.body);
    res.status(201).json(newUSer);
  }
  async searchUSersController(req, res) {
    const { query } = req.body;
    const result = await this.userService.searchUsers(query);
    res.json(result);
  }
}

export default userController;
