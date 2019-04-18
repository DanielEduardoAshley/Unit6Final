const express = require('express');
const usersRouter = express.Router();
const usersServices = require('../services/usersServices');



// POST new user
usersRouter.post('/', (req,res)=>{
    usersServices.create('SamTheMan')
    .then(()=>{
        console.log('success')
        res.status(200)
        res.json('Posted user')
    })
    .catch(err=>{
        console.log('There was an error in post user', err)
        res.json('There was an error in post user')
    })
    

})

// GET all users
usersRouter.get('/', (req,res)=>{
    usersServices.read()
    .then((response)=>{
        console.log('USER RESPONSE', response)
        res.status(200)
        res.json(response)
    })
    .catch(err=>{
        console.log('There was an error in get all users', err)
        res.json('There was an error in get all users')
    })
    
})

// GET single user
usersRouter.get('/:id', (req,res)=>{
    const { id } = req.params
    usersServices.readOne(id)
    .then((response)=>{
        console.log('ONE USER', response)
        res.status(200)
        res.json(response)
    })
    .catch(err=>{
        console.log('There was an error in get single user', err)
        res.json('There was an error in get single user')
    })
    
    
})




module.exports = { usersRouter };