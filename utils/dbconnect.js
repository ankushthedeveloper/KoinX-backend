import mongoose from "mongoose";
const connectmongodb=()=>{
  mongoose.connect(process.env.MONGO_URI || "",{serverSelectionTimeoutMS: 5000})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));
}

export default connectmongodb;