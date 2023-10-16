import express from "express";
const routes = express.Router();
// adding this from chatgpt
const cors = require('cors');

const cartItems = (id: number, product: string, price: number, quantity: number) => ({
    id,
    product,
    price,
    quantity
});

const sneakers = [
    cartItems(1, "Nike Air Jordan I", 124.99, 23),
    cartItems(2, "Nike Kobe V Protro", 249.99, 8),
    cartItems(3, "Nike Air More Uptempo", 149.99, 33),
    cartItems(4, "Puma OG Palace Guard", 74.99, 11),
    cartItems(5, "Adidas AdiZero Rose 1", 89.99, 1)
];
// added from chatgpt
routes.use(cors());

const filterItemsByPrefix = (sneakers: any[], prefix: string) =>
    prefix ? sneakers.filter(item => item.product.startsWith(prefix)) : sneakers;

// routes.get("/", (req, res) => {
//     res.json({hello: "world"})
// });

// routes.get("/sneakers", (req, res) => {
//     res.json(sneakers)
// });
// routes.get("/sneakers/:id", (req, res) => {
//     res.json(sneakers[+req.params.id])
// });

routes.get("/cart-items", (req, res) => {
    const prefix: string = req.query.prefix as string;
    const filteredItems = filterItemsByPrefix(sneakers, prefix);
    res.status(200).json(filteredItems);
});
// routes.get("/cart-items/:id", (req, res) => {
//     res.json(sneakers[+req.params.id])
// });
routes.get("/cart-items/:id", (req, res) => {
    const itemId = +req.params.id;
    const item = sneakers.find(item => item.id === itemId)
    if (item) {
        res.status(200).json(item);
    } else {
        res.status(404).json({message: "ID Not Found"});
    }
});
routes.post("/cart-items", (req, res) => {
    sneakers.push(cartItems(req.body.id, req.body.product, req.body.price, req.body.quantity))
    res.json(sneakers)
});
routes.put("/cart-items/:id", (req, res) => {
    const editId = +req.params.id
    sneakers [editId] = cartItems(req.body.id, req.body.product, req.body.price, req.body.quantity)
    res.json(sneakers[editId])
});
// routes.delete("/cart-items/:id", (req, res) => {
//    const delId = +req.params.id
//     res.json(sneakers.splice(delId, 1)[0].product)
// });
routes.delete("/cart-items/:id", (req, res) => {
    const delId = +req.params.id;
    const deletedItem = sneakers.splice(delId, 1);
    if (deletedItem.length === 1) {
        res.sendStatus(204);
    } else {
        res.status(404).send("ID Not Found");
    }
});

export default routes;