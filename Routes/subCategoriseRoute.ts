import { Router } from "express";
import { createSubCategorise, deleteSubCategory, getAllSubCategorise, getSubCategory, UpdateSubCategory } from "../Controllers/callSubCategories";
const subCategoriseRouter: Router = Router();

subCategoriseRouter.route('/')
    .get(getAllSubCategorise)
    .post(createSubCategorise)
     
    subCategoriseRouter.route('/:id')
    .get(getSubCategory)
    .put(UpdateSubCategory)
    .delete(deleteSubCategory)


 export default subCategoriseRouter; 