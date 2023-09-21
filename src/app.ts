import express from "express";
import { productsRouter } from "./routers/products.routes";

const app = express();

app.use(express.json());

app.use("/products", productsRouter);

app.listen(3000, () => {
   console.log("API started sucessfully in port 3000!");
});
