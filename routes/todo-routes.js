router = require('express').Router();
TodoSchema = require('../models/todo');

router.post("/todo", async (request, response) => {
    todo = new TodoSchema({
        name : request.body.name,
        about : request.body.about,
        date : request.body.date
    })
    try 
    {
      await todo.save();
      response.send(todo);
    }
     catch (error) 
     {
      response.status(500).send(error);
    }
  });


router.get('/todo', (req,res)=>{
    TodoSchema.find({})
        .exec()
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.json({success: false, message:"Error"})
        })
})

router.get('/todo/:id', (req,res)=>{
    id = req.params.id;
    TodoSchema.find({_id:id})
        .exec()
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            res.json({success: false, message:"Error"})
        })
})

router.patch('/todo/:id', (req,res)=>{
    id = req.params.id;
    TodoSchema.updateOne({_id:id},{$set: req.body})
        .exec()
        .then((_)=>{
            res.json({success:true, message: "Task Updated successfully"})
        })
        .catch((err)=>{
            res.json({success: false, message:"Error"})
        })

})

router.delete('/todo/:id', (req,res)=>{
    id = req.params.id;
    TodoSchema.deleteOne({_id:id})
        .exec()
        .then((_)=>{
            res.json({success:true, message: "Task deleted successfully"})
        })
        .catch((err)=>{
            res.json({success: false, message:"Error"})
        })
})


module.exports = router;