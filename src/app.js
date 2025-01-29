import express from "express";
import userRouter from "./routes/user.route.js";
import Routes from "./routes/routes.js";

const app = express();

app.use(express.json());

app.use(...Routes());

app.get("users", () => {});

app.listen(4000, () => {
  console.log("server running port", 4000);
});
