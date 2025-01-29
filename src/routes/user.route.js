import { Router } from "express";
import userController from "../controllers/user.controller.js";

const userRouter = Router();

const controller = new userController();

userRouter.get("/api/users", (req, res) => {
  return controller.getAllUsersController(req, res);
});

userRouter.get("/api/users/active", (req, res) => {
  return controller.getActiveUserController(req, res);
});

userRouter.get("/api/users/active/:id", (req, res) => {
  return controller.getUserByIdController(req, res);
});

userRouter.post("/api/user", (req, res) => {
  return controller.addUserController(req, res);
});

userRouter.post("/api/users/search", (req, res) => {
  return controller.searchUSersController(req, res);
});

export default userRouter;
