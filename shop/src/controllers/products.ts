import Products from "../models/Products";
import { reqRes } from "../utils/interfaces";
import { ProductNotFoundError } from "../utils/errors";
import Product from "../models/Products";

// CREATE

export const postProduct: reqRes = async (req, res) => {
    try {
        const product = new Products(req.body)
        await product.save()
        res.status(201).send(product)
    } catch (err) {
        res.status(400).send("Server Error")
    }
}

// READ ALL

export const getProducts: reqRes = async (req, res) => {
	try {
		const products = await Products.find()
		res.status(200).send(products)
	} catch (err) {
		res.status(500).send("Server Error")
	}
}

// READ ONE

export const getProduct: reqRes = async (req, res) => {
	try {
		const product = await Products.findById(req.params.id)
		if (!product) throw new ProductNotFoundError()
		res.status(200).send(product)
	} catch (err) {
		let status = { code: 500, message: "Product" }
		if (err instanceof ProductNotFoundError) {
			status = { code: 404, message: err.message }
		}
		res.status(status.code).send(status.message)
	}
}

// UPDATE

export const updateProduct: reqRes = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		if (!product) throw new ProductNotFoundError()
		if (req.body.name) product.name = req.body.name
		if (req.body.price) product.price = req.body.price
        if (req.body.photoURL) product.photoURL = req.body.photoURL
		product.save()
		res.status(200).send(product)
	} catch (err) {
		let status = { code: 500, message: "Product Not Found" }
		if (err instanceof ProductNotFoundError) {
			status = { code: 404, message: err.message }
		}
		res.status(status.code).send(status.message)
	}
}

// DESTROY

export const deleteProduct: reqRes = async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id)
		res.status(204).send()
	} catch (err) {
		let status = { code: 500, message: "Product Not Found" }
		res.status(status.code).send(status.message)
	}
}