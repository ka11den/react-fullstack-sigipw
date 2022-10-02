import express from 'express'
import { createCart, deleteCart, getCart, getUserCart, updateCart } from '../controllers/CartController.js'
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// Создать
router.post('/', verifyToken, createCart)

// Изменить 
router.put('/:id', verifyTokenAndAuthorization, updateCart)

// Получить
router.get('/', verifyTokenAndAdmin, getCart)

// Получить все
router.get('/find/:userId', verifyTokenAndAuthorization, getUserCart)

// Удалить
router.delete('/:id', verifyTokenAndAuthorization, deleteCart)

export default router