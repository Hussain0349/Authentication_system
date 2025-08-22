import dotenv from 'dotenv'
 
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import router from './routes/user.routes.js'
import express from 'express'
import connect from './config/db_connection.js'
import cookieParser from 'cookie-parser'
const app = express()
 
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
dotenv.config({ path: join(__dirname, '../.env') })


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


const port = process.env.PORT || 3000

app.use('/user',router)
connect()
.then(() => {
    app.listen(port, () => {
        console.log(`App is listening on Port ${process.env.PORT}`)
        console.log(process.env.MONGODB_URL)
    })
})
.catch((error) => {
    console.log(`something went wrong while starting the server ${error}`)
})