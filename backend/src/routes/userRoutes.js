const express = require('express');
const { createUser, getUsers, getSingleUser, deleteUser, updateUser } = require('../controllers/userController');
const router = express.Router();


//****CreateUser*****//
router.post("/createUser",createUser);


//***GetUsers****//
router.get("/",getUsers)


//***getSingleUser****//
router.get("/:id",getSingleUser)


//***deleteUser****//
router.delete("/:id",deleteUser)

//***updateUser****//
router.post("/:id",updateUser)

module.exports = router;