import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contact.route.js";
    
dotenv.config();
connectDB();
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/hello', (req, res) => {
    res.json({
        message: "Hello World !"
    });
});

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT ? Number(process.env.PORT) : 5171;
app.listen(PORT, () => {
    console.log(`API lancée sur http://localhost:${PORT}`);
});