const mongoose = require("mongoose");
const cuid = require("cuid");

const todoSchema = new mongoose.Schema({
 id: {
    type: String,
    unique: true,   // Ensure the ID is unique
    default: cuid,  // Automatically generate a cuid for the id
      
},

  name: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ["Pending", "Completed"], 
    default: "Pending" 
  }
},{
    timestamps:true,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
