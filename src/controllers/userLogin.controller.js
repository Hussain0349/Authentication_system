import bcrypt from 'bcrypt'
import User from '../models/user.model.js'
import generateTokens from '.././utils/generateToken.js'


const login = async (req,res) => {
try {
    
        const options = {
        httpOnly: true,
        secure: true
      }
    
        const {email,password} = req.body
    
        const validateUser = await User.findOne({email})
        console.log(validateUser.password)
        if(!validateUser){
            res.status(400).json({
                message: 'user not found'
            })
        }
        console.log('yahan tak')
        const validatePassword = await bcrypt.compare(password,validateUser.password)
        if(!validatePassword){
            res.status(400).json({
                'message': 'invalide credentials'
            })
        }
        const accessToken = generateTokens(validateUser._id)
        console.log(accessToken)
        if(!accessToken){
                res.status(400).json({
                    'message': 'error caused while generating token'
                })
        }
    
        res
        .status(200)
        .cookie("token", accessToken, options)
        .json({
            message: "User login successfully!",
            token: accessToken,      
            user: {
                id: validateUser._id,
                email: validateUser.email,
                username: validateUser.userName
            }
        })
} catch (error) {
    res.status(500).json({
        error: error.message
    })
}



}
export default login