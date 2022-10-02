import express from 'express'

const router = express.Router()
const stripe = require("stripe")(process.env.STRIPE_KEY);


export default router