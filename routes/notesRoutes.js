const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.get('/', noteController.index);
router.get('/nothing', noteController.nothing)

router.get('/new', noteController.newNote);
router.get('/seed', noteController.seedNotes)
router.post('/search', noteController.search)
router.get('/:id/edit', noteController.editNote)
router.get('/:id', noteController.showNote);
router.put('/:id', noteController.updateNote)
router.post('/', noteController.createNote);
router.delete('/:id', noteController.deleteNote)

module.exports = router;