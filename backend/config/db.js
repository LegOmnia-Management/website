import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.warn('MONGO_URI non défini, DB non connectée');
            return;
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connecté');
    } catch (error) {
        console.error('Erreur MongoDB:', error.message);
    }
}

export default connectDB;
