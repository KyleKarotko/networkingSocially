const router = require("express").Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require("../../controllers.userController.js");

//  get post api users
router.route('/').get(getUsers).post(createUser);

// get put delete api users :userID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// delete post api users :userId freinds :friendsId
router.route('/:userId/friends/:friendId').delete(removeFriend).post(addFriend);