const express = require('express');
const router = express.Router();
const { getQuizz, createQuizz, getQuizzById, updateQuizz, deleteQuizz } = require('../Controller/quizzController');

router.get("/", getQuizz);
router.post("/", createQuizz);
router.get("/:id", getQuizzById);
router.put("/:id", updateQuizz);
router.delete("/:id", deleteQuizz);

