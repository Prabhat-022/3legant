import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from '../src/routes/userRoutes.js';
import cartRoutes from '../src/routes/cartRoute.js';
import adminRoutes from '../src/routes/adminRoute.js';
import productRoutes from '../src/routes/productRoutes.js';
import connectDB from '../src/db/dbConfig.js';


dotenv.config({
    path: './.env'
});

const app = express();
connectDB();

const port = process.env.PORT || 6000;

// For parsing application/json
app.use(express.json());
app.use(cookieParser());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send('i am coming form the server');
})

app.get('*', (req, res) => {
    res.send('Page not found');
})

// Create API
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/product", productRoutes);


app.listen(port, () => {
    console.log(`Index server ${port}`);
});
