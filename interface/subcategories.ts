import { Categorise } from './Icategories';
import { Document } from "mongoose";

export interface Subcategories extends Document {
  name: string;
  image: string;
  category: Categorise
}