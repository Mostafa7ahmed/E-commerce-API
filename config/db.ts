import mongoose from "mongoose";

 const dbConnection = () => {
    mongoose.connect(process.env.DB! )
    .then(() => {console.log(`Connected to MongoDB `);})
   .catch((error) => console.error('Error connecting to MongoDB:', error));
}

export default dbConnection;