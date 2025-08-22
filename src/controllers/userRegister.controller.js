import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
const register = async (req,res) => {
    try {
        
        const {userName,fullName,email,password,task} = req.body
        
        const checkUser = await User.findOne({email})
        if(checkUser){
            res.status(400).json({message: 'user already exist! '})
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({userName,fullName,email,password: hashedPassword});
        user.save()
        res.status(200).json({message: 'user registered successfully! ',user})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
export default register