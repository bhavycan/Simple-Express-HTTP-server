const express = require('express')
const friendsController = require('../controllers/friends.controller')
const friendsRouter = express.Router()



friendsRouter.get('/', friendsController.getAllfriends )
//when you use the express router the path will be relative to the comman route in endpoint
friendsRouter.get('/:friendId',friendsController.getFriendswithParams )
friendsRouter.post('/', friendsController.postFriends )



module.exports = friendsRouter;

