import express from 'express'
import  register  from '../controllers/userRegister.controller.js'
import login from '../controllers/userLogin.controller.js'
import authed from '../middlewares/auth.middleware.js'
import logedout from '../controllers/userlogout.controller.js'

const router = express.Router()

// user routes
router.post('/register', register)
router.post('/login',login)
router.post('/profile',authed,() => {
    console.log('yes this is the profile')
})
router.post('/logout',logedout)
export default router
