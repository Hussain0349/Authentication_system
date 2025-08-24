import User from '../models/user.model.js'
const allTask = async (req,res) => {
    try {
        const users = req.user
        console.log(users)
        console.log(users)
        if(!users){
            res.status(404)
            .json({
                message: 'User not found! '
            })
        }

        const getTasks = await User.findById(users._id).populate('tasks')
       if(!getTasks){
        res.status(404).json({
            message: 'task not founded'
        })
       }
       res.status(200)
       .json({
        task:getTasks.tasks
       })



    } catch (error) {
        console.log('some error caught while all tasks',error)
    }

}
export default allTask