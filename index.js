import express from "express";
import "./services/db.js";
import cors from "cors";
import employeeRegister from "./features/register-user/routeRegister.js";
import employeeLogin from "./features/login-user/routeLogin.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/employeeRegister", employeeRegister);
app.use("/employeeLogin", employeeLogin);

app.listen(3005, () => {
  console.log(" Running on the localhost:8085");
});
