import jwt from 'jsonwebtoken'
const generateTokens = (userId) => {
    
    return jwt.sign(
        {
            user: userId
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )

}
export default generateTokens