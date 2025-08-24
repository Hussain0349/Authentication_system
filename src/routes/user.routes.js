import express from 'express'
import  register  from '../controllers/userRegister.controller.js'
import login from '../controllers/userLogin.controller.js'
import authed from '../middlewares/auth.middleware.js'
import logedout from '../controllers/userlogout.controller.js'
import addTask from '../controllers/addTask.controller.js'
import allTask from '../controllers/allTask.controller.js'
import updateTask from '../controllers/updateTask.controller.js'

const router = express.Router()

// routes routes
router.post('/register', register)
router.post('/login',login)
router.post('/profile',authed)
router.post('/logout',logedout)
router.post('/addtask',authed,addTask)
router.post('/allTask',authed,allTask)
router.delete('/deleteTask/:id',authed,updateTask)
export default router
