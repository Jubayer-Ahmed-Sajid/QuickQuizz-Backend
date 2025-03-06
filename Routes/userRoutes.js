const express = require("express");
const router = express.Router();
const {getUsers, createUser, getUserById} = require('../Controller/userController');

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
module.exports = router;