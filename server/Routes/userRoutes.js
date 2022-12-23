const express = require('express');
const userController = require('./../Controller/userController');


const router = express.Router();
router.post('/createUser' , userController.createUser)
router.put('/updateMe/:id', userController.updateUser);
router.delete('/deleteMe/:id',userController.deleteUser);
router.get('/:id',  userController.getUser);
router.get('/', userController.getAllUser);



module.exports = router 