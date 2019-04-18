const express = require('express');
const showsRouter = express.Router();
const showsServices = require('../services/showsServices');




// GET all shows
showsRouter.get('/',(req,res)=>{
    res.status(200)
    res.json('Shows Route Works')


})

// GET all shows for specific genre_id
showsRouter.get('/genre/:genre_id', (req,res)=>{
    const { genre_id } = req.params
    res.status(200)
    res.json(`Shows router with genre id ${genre_id}`)
})

// GET all shows for specific user_id
showsRouter.get('/user/:user_id',(req,res)=>{
    const { user_id } = req.params
    res.status(200)
    res.json(`Shows router with user id ${user_id}`)

})

// GET one show
showsRouter.get('/:show_id', (req,res)=>{
    const { show_id } = req.params
    res.status(200)
    res.json(`Shows router with show id ${show_id}`)
})

// POST new show
showsRouter.post('/', (req,res)=>{
    res.status(200)
    res.json(`Posted show`)
})




module.exports={ showsRouter }