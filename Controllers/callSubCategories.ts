import { Subcategories } from './../interface/subcategories';
import subcategoriesModel from "../Modules/subcategoriesModel";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler"

export const getAllSubCategorise = asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    const subCategories:Subcategories[] = await subcategoriesModel.find();
    res.status(200).json({ data: subCategories });
});

export const createSubCategorise = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const subCategory : Subcategories = await subcategoriesModel.create(req.body)
    res.status(201).json({ data: subCategory });
 })


 export const getSubCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const subCategory :Subcategories | null  = await subcategoriesModel.findById(req.params.id)
    res.status(200).json({ data: subCategory });
 })

 export const UpdateSubCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const subCategory :Subcategories | null   = await subcategoriesModel.findByIdAndUpdate(req.params.id ,req.body, {new : true})
    res.status(200).json({ data: subCategory });
 })


 export const deleteSubCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const subCategory:Subcategories | null  = await subcategoriesModel.findByIdAndDelete(req.params.id)
    res.status(204 ).json({ data: subCategory });
 })
