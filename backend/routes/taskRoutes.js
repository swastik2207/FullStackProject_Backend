const express = require("express");
const {createTask,updateStatus,getAllTasks,deleteTask} = require("../controllers/taskControllers");
const router=express.Router();

router.route("/create").post(createTask);
router.route("/update").put(updateStatus);
router.route("/getalltasks").get(getAllTasks);
router.route("/deletetask/:id").delete(deleteTask);


module.exports =router;