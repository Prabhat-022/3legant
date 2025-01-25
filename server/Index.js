import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './src/routes/userRoutes.js';
import productRoutes from './src/routes/productRoutes.js';
import cartRoutes from './src/routes/cartRoute.js';
import connectDB from './src/db/dbConfig.js';
import path from 'path';



dotenv.config({
    path: './.env'
});

const app = express();
connectDB();

const port = process.env.PORT || 6000;
const __dirname = path.resolve();

// For parsing application/json
app.use(express.json());
app.use(cookieParser());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

// Create API
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart",cartRoutes );

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
})

app.listen(port, () => {
    console.log(`Index server ${port}`);
});
