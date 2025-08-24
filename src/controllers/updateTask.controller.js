
import User from '../models/user.model.js'
const updateTask = async (req,res) => {

    try {
        const userId = req.user._id
        console.log(userId)

        const taskId = req.params.id.trim()
        console.log(taskId)

        const updateTasks = await User.findByIdAndUpdate(userId,
            {$pull: {tasks: taskId}},
            {new: true}
        ).populate('tasks')

        if(!updateTasks){
            res.status(500)
            .json({
                message: 'Task not deleted',
                tasks: updateTask.tasks
            })

        }
        res.status(200)
        .json({
            message: 'Task deleted sucessfully!'
        })

    } catch (error) {
        console.log('error caught while delete the task',error)
    }
    

}
export default updateTask;