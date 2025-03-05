const express = require('express');
const router = express.Router();
const {
    getAllQuestions,
    createQuestion,
    getQuestionById,
    updateQuestion,
    deleteQuestion
} = require('../Controller/questionController');

// Retrieve all questions
router.get('/', getAllQuestions);

// Create a new question
router.post('/', createQuestion);

// Retrieve a specific question by ID
router.get('/:id', getQuestionById);

// Update a question by ID
router.put('/:id', updateQuestion);

// Delete a question by ID
router.delete('/:id', deleteQuestion);

module.exports = router;
