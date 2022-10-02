import express from 'express'
import { createOrder, deleteOrder, getIncomeOrder, getOrder, getUserOrder, getAdminOrder, updateOrder } from '../controllers/OrderController.js'
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from '../utils/verifyToken.js'
const router = express.Router()

// Создать
router.post('/', verifyToken, createOrder)

// Изменить 
router.put('/:id', verifyTokenAndAdmin, updateOrder)

// Получить
router.get('/find/:userId', verifyToken, getUserOrder)

// Получить
router.get('/find/:userId', verifyTokenAndAuthorization, getOrder)

// Получить admin
router.get('/get/:userId', verifyTokenAndAdmin, getAdminOrder)

// Получить все
router.get('/', verifyTokenAndAdmin, getOrder)

// Получи за месяц
router.get('/income', verifyTokenAndAdmin, getIncomeOrder)

// Удалить
router.delete('/:id', verifyTokenAndAdmin, deleteOrder)

export default router