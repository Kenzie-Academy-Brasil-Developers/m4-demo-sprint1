import express from "express";
import { createUser, deleteUser, getOneUser, getUsers, updateUser } from "./logic";

const app = express();

app.use(express.json());

app.get("/:userId", getOneUser);
app.get("/", getUsers);
app.post("/", createUser);
app.delete("/:userId", deleteUser);
app.put("/:userId", updateUser);

app.listen(3000, () => {
   console.log("API started sucessfully in port 3000!");
});
