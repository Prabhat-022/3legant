import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan'
import dotenv from 'dotenv';
import cors from 'cors'
import productRoute from '../src/routes/productRoute.js'
import paymentRoute from '../src/routes/paymentRoute.js'
import orderRoute from '../src/routes/orderRoute.js'
import userRoute from '../src/routes/userRoute.js'
import cartRoute from '../src/routes/cartRoute.js'
import { connectDB } from '../src/config/db.js'


dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

//connect to the database 
connectDB();

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(morgan('dev'));


const corsOptions = {
    origin: ["http://localhost:5173", "https://3legant-steel.vercel.app"],
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send("-> Hello i am coming form backend ok , Please enjoy!!")
})

//routes
app.use('/api', userRoute)
app.use('/api', cartRoute)
app.use('/api', productRoute)
app.use('/api', paymentRoute)
app.use('/api', orderRoute)


app.listen(port, () => {
    console.log(`-> Hi, server is start: ${port}`)
})