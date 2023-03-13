const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController.js');

// get post api thoughts
router.route('/').get(getThoughts).post(createThought);

// get put delete api thoughts :thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);


// post delete api thoughts :thoughtId reactions
router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;