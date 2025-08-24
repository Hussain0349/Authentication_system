import jwt from "jsonwebtoken";
import User from '../models/user.model.js'


const authed = async (req,res,next) => {

    try {
        const token = req.cookies.token
        if(!token){
            res.status(404).json(
                {
                    message: 'token is not given'
                }
            )
        }
        const verifyToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        // console.log(verifyToken)
        if(!verifyToken){
            res.status(401).json({
                message: 'Unauthorized User! '
            })
        }
    
        const user = await User.findById(verifyToken._id).select('-password')
        req.user = user
        next()
    } catch (error) {
        console.log('error',error)
    }


}

export default authed
