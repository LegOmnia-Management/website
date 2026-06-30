import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contact.route.js";
import categoryRoutes from "./routes/category.route.js";
import articleRoutes from "./routes/article.route.js";
    
dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: [process.env.CLIENT_URL, 'https://website-lemon-gamma-10.vercel.app'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contact", contactRoutes);
app.use("/api/blog/category", categoryRoutes);
app.use("/api/blog/article", articleRoutes);

const PORT = process.env.PORT ? Number(process.env.PORT) : 5171;

if (process.env.VERCEL !== '1') {
    app.listen(PORT, () => {
        console.log(`API lancée sur le port : ${PORT}`);
    });
}

export default app;
