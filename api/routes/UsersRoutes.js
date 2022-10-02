import express from 'express'
import { deleteUser, getUser, getUsers, updateUser, changePassword, addContact, editContact } from '../controllers/UserController.js'
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// Изменить 
router.put('/:id', verifyToken, updateUser)

// Добавить контакты
router.patch('/add-contact', verifyToken, addContact)

// Изменить контакты
router.put('/edit-contact/:id', verifyToken, editContact)

// Изменить 
router.put('/change/:id', verifyToken, changePassword)

// Удалить
router.delete('/:id', verifyTokenAndAuthorization, deleteUser)

// Получить 
router.get("/find/:id", verifyTokenAndAuthorization, getUser)

// Получить все
router.get('/', verifyTokenAndAdmin, getUsers)

// Получить статистику
router.get('/stats', verifyTokenAndAdmin, getUsers)

export default router