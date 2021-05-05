const express = require('express');
const router = express.Router();

const { getUser, postUser, deleteUser, editUser } = require('../controllers/User')

router.post('/user', postUser);
router.get('/users', getUser);
router.patch('/user/:id', editUser);
router.delete('/user/:id', deleteUser);

module.exports = router;