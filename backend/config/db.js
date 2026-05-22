import Mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await Mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connecté");
    } catch (err) {
        console.error("Erreur MongoDB :", err);
        process.exit(1);
    }
};
    
export default connectDB;