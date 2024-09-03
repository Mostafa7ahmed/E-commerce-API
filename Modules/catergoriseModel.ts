import { Categorise } from './../interface/Icategories';
import { Schema, model } from 'mongoose';

const CategoriseSchema :Schema= new Schema({
    name: { type: String, required: true , unique: true },
    image: String
}, { timestamps: true });


export  default model<Categorise>('categorise', CategoriseSchema);