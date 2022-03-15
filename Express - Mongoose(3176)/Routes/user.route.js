const express = require('express');
const router = express.Router();
const { getAllUsers, createUser,deleteUser,getUser, modifyUser, checkFileds} = require('../Controllers/user.controller');
const { body, validationResult } = require('express-validator');

router.get("/",getAllUsers);

router.post("/",...checkFileds(),createUser);


router.delete("/",deleteUser)
router.get("/:username",getUser)
router.patch("/:username",modifyUser)

module.exports = router