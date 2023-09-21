import { Router } from "express";
import { getOneUser, getUsers, createUser, deleteUser, updateUser, updatePartialUser } from "../logic";
import { isUserIdValid, isUserEmailUnique, bodyValidator } from "../middlewares";
import { productCreateBodySchema } from "../schemas/productCreateBody.schema";

export const productsRouter = Router();

productsRouter.get("/:userId", isUserIdValid, getOneUser);
productsRouter.get("/", getUsers);
productsRouter.post("/", bodyValidator(productCreateBodySchema), isUserEmailUnique, createUser);
productsRouter.delete("/:userId", isUserIdValid, deleteUser);
productsRouter.put("/:userId", isUserIdValid, isUserEmailUnique, updateUser);
productsRouter.patch("/:userId", isUserIdValid, isUserEmailUnique, updatePartialUser);