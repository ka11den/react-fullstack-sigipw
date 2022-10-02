import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
dotenv.config()

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

import ProductRoute from './routes/ProductRoutes.js';
import AuthtRoute from './routes/AuthRoutes.js';
import UserRoute from './routes/UsersRoutes.js';
import OrderRoute from './routes/OrderRoutes.js';
import CartRoute from './routes/CartRoutes.js';

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'Произошла ошибка'
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

const PORT = process.env.PORT || 8800

const start = async () => {
    try {
        await mongoose.connect(process.env.mongo_url)
        console.log('mongodb connection!')
    } catch (error) {
        throw error
    }
    
    app.listen(PORT, () => {
        console.log(`Backend to started on ${PORT}!`)
    })
    
    app.use('/api/products', ProductRoute);
    app.use('/api/auth', AuthtRoute);
    app.use('/api/users', UserRoute);
    app.use('/api/orders', OrderRoute);
    app.use('/api/carts', CartRoute);
}

start()