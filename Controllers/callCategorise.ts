import { Categorise } from './../interface/Icategories';
import { Request, Response, NextFunction } from "express";
import catergoriseModel from "../Modules/catergoriseModel";
import asyncHandler from "express-async-handler"

export const getAllCategorise = asyncHandler (async (req: Request, res: Response, next: NextFunction) => {
    const categories:Categorise[] = await catergoriseModel.find();
    res.status(200).json({ data: categories });
});

export const createCategorise = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const Category : Categorise = await catergoriseModel.create(req.body)
    res.status(201).json({ data: Category });
 })


 export const getCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const Category :Categorise | null  = await catergoriseModel.findById(req.params.id)
    res.status(200).json({ data: Category });
 })

 export const UpdateCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const Category :Categorise | null   = await catergoriseModel.findByIdAndUpdate(req.params.id ,req.body, {new : true})
    res.status(200).json({ data: Category });
 })


 export const deleteCategory = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const Category:Categorise | null  = await catergoriseModel.findByIdAndDelete(req.params.id)
    res.status(204 ).json({ data: Category });
 })
