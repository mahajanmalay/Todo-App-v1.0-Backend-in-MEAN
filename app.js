express = require('express');
todoRoute = require('./routes/todo-routes');
app = express();
port = process.env.port || 8080;
mongoose = require('mongoose');
bodyParser = require('body-parser')



cors=require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connectionParams={
    useNewUrlParser: true,
  }

app.use(todoRoute);

app.listen(port, ()=> {
    console.log("Server started at :", port);
});

mongoose.connect(
    "mongodb+srv://mm:mm@todo.awfpgzm.mongodb.net/?retryWrites=true&w=majority",
    (err)=>{
        if(err){
            console.log("Error while connecting database");
        }
        else{
            console.log("Database connected");
        }
    }
);