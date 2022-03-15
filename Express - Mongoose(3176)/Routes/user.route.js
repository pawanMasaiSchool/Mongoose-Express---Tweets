const express = require('express');
const router = express.Router();
const { getAllUsers, createUser,deleteUser,getUser, modifyUser } = require('../Controllers/user.controller');


router.get("/",getAllUsers)
router.post("/",createUser)
router.delete("/",deleteUser)
router.get("/:username",getUser)
router.patch("/:username",modifyUser)

module.exports = router