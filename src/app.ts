import express from "express";
import router from "./router";
import morgan from "morgan";
// const path = require("path");
import * as dotenv from "dotenv";
import { protect } from "./modules/auth";
import { createUser, signin } from "./handlers/user";

dotenv.config();
console.log(dotenv.config())
console.log("process.env.JWT_SECRET ", process.env.JWT_SECRET)

const PORT = 3000;
const app = express();

app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    console.log("hello world");
    res.json({message: "hello world"})
    // res.send("hell world");
})

// app.use("/api", protect, router);
app.use("/api", router);

app.post("/user", createUser)
app.post("/signin", signin)

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`)
})

// 

module.exports = app;