import express from 'express'
import { createProduct, delteProduct, getAllProduct, getProduct, putProduct } from '../controllers/ProductController.js';
const router = express.Router()

// Создать
router.post('/', createProduct)

// Изменить 
router.put('/:id', putProduct)

// Получить
router.get('/find/:id', getProduct)

// Получить все
router.get("/", getAllProduct)

// Удалить
router.delete('/:id', delteProduct)

export default router