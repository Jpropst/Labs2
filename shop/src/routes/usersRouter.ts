import express from "express";
import {
    postUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
} from "../controllers/users";

const routes = express.Router()

routes.post("/", postUser)
routes.get("/", getUsers)
routes.get("/:id", getUser)
routes.put("/:id", updateUser)
routes.delete("/:id", deleteUser)

routes.get("/", (rec, res) => {
    res.send("Hello World")
})

export default routes