import express from 'express';
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoute from'../src/routes/userRoute.js'
import cartRoute from'../src/routes/cartRoute.js'
import productRoute from'../src/routes/productRoute.js'
import {connectDB} from '../src/config/db.js'
import paymentRoute from '../src/routes/paymentRoute.js'
import cors from 'cors'

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(bodyParser.json());

const corsOptions = {
    origin: "http://localhost:5173",
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


app.listen(port, () => {
    console.log(`-> Hi, server is start: ${port}`)
    connectDB();

})