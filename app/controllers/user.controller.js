const express = require('express');

const router = express.Router();

const { getUsers } = require('../services/user.service');

router.get('/', async(req, res) => {
 try {
     const users = await getUsers();

     return res.status(200).json({
         message: 'Users retrieved successfully',
         data: users
     });
 } catch (error) {
    console.error('Error retrieving users:', error);
    return res.status(500).json({
        message: error.message
    });
 }
});

module.exports = router;