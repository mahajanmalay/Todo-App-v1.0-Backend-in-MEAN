mongoose = require('mongoose');

Schema = mongoose.Schema;

todoSchema = new Schema({
    name : {type:String},
    about : {type:String},
    date : {type:Date},
    created_at : {type:Number, default: Date.now().valueOf()},
    updated_at : {type:Number, default: Date.now().valueOf()}
})

module.exports = mongoose.model('TodoSchema', todoSchema);