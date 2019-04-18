const express = require('express');
const commentsRouter = express.Router();
const commentsServices = require('../services/commentsServices');


// GET all comments for specific show_id
commentsRouter.get('/:comment_id', (req, res)=>{
    const { comment_id } = req.params
    res.status(200)
    res.json(`Got comment by ${comment_id}`)
})

// POST new comment
commentsRouter.post('/', (req, res)=>{

    res.status(200)
    res.json(`Posted new comment`)
})





module.exports={ commentsRouter }