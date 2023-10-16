import express from "express";
import {
    postProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
} from "../controllers/products";

const routes = express.Router()

routes.post("/", postProduct)
routes.get("/", getProducts)
routes.get("/:id", getProduct)
routes.put("/:id", updateProduct)
routes.delete("/:id", deleteProduct)


routes.get("/", (rec, res) => {
    res.send("Hello World")
})

export default routes