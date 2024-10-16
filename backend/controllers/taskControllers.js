const Task = require('../model/Task');

const createTask = async(req,res)=>{


    try{
        const {name,date,status} = req.body;
        if(!name || !date || !status){

            throw new Error({
                message : "All Fields are Mandatory"
            })
        }

        const newTask = await Task.create({

            name,
            date,
            status,
    
        });

        if(!newTask){
            throw new Error({message:"Task is not created "})
        }

        res.status(200).json({
            message:"task created sucessfully"
        })
    }
    catch(err){

        res.status(400).json({
            message:err.message
        })
    }
}


const updateStatus = async(req,res)=>{

    try{
        const {id} = req.body;
        const updatedTask = await Task.findOneAndUpdate(
            { id },              
            { status: "Completed" },        
            { new: true }                   
          );
          if(!updatedTask){
            throw new Error({message:"Updation is not Successfull "})
          }

          res.status(200).json({
            message:"task updated sucessfully"
        })

    }
    catch(err){

        res.status(400).json({
            message:err.message
        })

    }
}


const getAllTasks = async(req,res)=>{

    try{
       const allTasks = await Task.find({});
       if(!allTasks){
        throw new Error({message:"Updation is not Successfull "})
      }
      console.log(allTasks)
      const taskData = allTasks.map(task => ({
        id: task.id,
        name: task.name,
        date: task.date,
        status: task.status
      }));
      res.status(200).json(taskData)

    }
    catch(err){

        res.status(400).json({
            message:err.message
        })

    }

}

const deleteTask = async(req,res)=>{

    try{
      
        const {id} = req.params;
        console.log(id)

        const deletedTask = await Task.findOneAndDelete({ id: id });
        if(!deletedTask){
            throw new Error({message:"Deletion not successfull "})
          }
          res.status(200).json({message:"message deleted successfully"});
 
     }
     catch(err){
 
         res.status(400).json({
             message:err.message
         })
 
     }

}


module.exports={createTask,updateStatus,getAllTasks,deleteTask}