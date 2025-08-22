import jwt from "jsonwebtoken";

const logedout = async (req,res) => {
    let options = {
        httpOnly: true,
        secure: true
    }
    res.status(200)
    .clearCookie('token',options)
    .json({
        message: 'User log out successfully! '
    })

}
export default logedout

