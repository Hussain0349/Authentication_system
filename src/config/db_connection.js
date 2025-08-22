import mongoose from "mongoose";
import DB_NAME from './constent.js'

console.log(process.env.PORT)
console.log(DB_NAME)
console.log(process.env.MONGODB_URL)

const connect = async () => {

    try {

        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`db connected ${connection}`)
        
    } catch (error) {

        console.log('somer error caught while connecting with database', error)
        
    }
}
export default connect
