const router = require("express").Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

//  get post api users

router.route('/').get(getAllUsers).post(createUser);

// get put delete api users :userID

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// delete post api users :userId freinds :friendsId

router.route('/:userId/friends').delete(removeFriend).post(addFriend);

module.exports = router;