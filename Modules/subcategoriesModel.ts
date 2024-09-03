import { Subcategories } from './../interface/subcategories';
import { Schema, model } from 'mongoose';

const subcategoriesSchema: Schema = new Schema<Subcategories>({
  name: { type: String, required: true, trim: true },
  image: String,
  category: { type: Schema.Types.ObjectId, ref: 'categories' }
}, { timestamps: true })


export  default model<Subcategories>('subcategories', subcategoriesSchema);
