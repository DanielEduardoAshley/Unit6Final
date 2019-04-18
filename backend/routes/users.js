const express = require('express');
const usersRouter = express.Router();


// GET all users
usersRouter.get('/', (req,res)=>{
    res.status(200)
    res.json('hiUsersRouter')
})

// GET single user
usersRouter.get('/:id', (req,res)=>{
    const { id } = req.params
    res.status(200)
    res.json(`hiUsersRouter with id ${id}`)
})

// POST new user
usersRouter.post('/', (req,res)=>{

    res.status(200)
    res.json('Posted user')

})


module.exports = { usersRouter };