import { Router } from "express";
import { createCategorise, deleteCategory, getAllCategorise, getCategory, UpdateCategory } from "../Controllers/callCategorise";

const CategoriseRouter: Router = Router();
CategoriseRouter.route('/')
    .get(getAllCategorise)
    .post(createCategorise)

CategoriseRouter.route('/:id')
    .get(getCategory)
    .put(UpdateCategory)
    .delete(deleteCategory)

export default CategoriseRouter; 