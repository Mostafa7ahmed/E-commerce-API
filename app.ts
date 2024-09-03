import { Categorise } from './interface/Icategories';
import express from 'express';
import mongoose from 'mongoose';
const app: express.Application = express();
import dotenv from "dotenv";
import dbConnection from './config/db';
import CategoriseRouter from './Routes/categoriseRoute';
import subCategoriseRouter from './Routes/subCategoriseRoute';
app.use(express.json())
dotenv.config()
dbConnection()

app.use('/api/v1/Categorise', CategoriseRouter)
app.use('/api/v1/SubCategorise', subCategoriseRouter)

app.get('/', function (req: express.Request, res: express.Response) {
  res.json();
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
})