import jwt from 'jsonwebtoken'
const generateTokens = (user) => {
    
    return jwt.sign(
        {
            _id: user._id
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )

}
export default generateTokens