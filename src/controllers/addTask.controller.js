import jwt from 'jsonwebtoken'
import Task from '../models/task.model.js'
const addTask = async (req,res) => {

       try {
         const {title,description} = req.body
 
         const addedTask = new Task({title,description})
         await addedTask.save()


         const user = req.user

         if(!user){
          res.status(404).json({
            message: 'user is not found'
          })
         }

         user.tasks.push(addedTask._id)
         await user.save()
         
         


         res.status(200).json({
          message: 'Task added sucessfully! '
         })
         



       } catch (error) {
            console.log('some error caught',error)
       }
}
export default addTask