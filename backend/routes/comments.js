const express = require('express');
const commentsRouter = express.Router();
const commentsServices = require('../services/commentsServices');



// POST new comment
commentsRouter.post('/', (req, res)=>{
    const {comment_body, user_id, show_id } = req.body
    commentsServices.create(comment_body, user_id, show_id)
    .then(()=>{
        console.log('Success comment created')
        res.status(200)
        res.json(`Success comment created`)
    })
    .catch(err=>{
        console.log('Something went wrong in post comment route', err)
        res.json('Something went wrong in post comment route')
    })
    
})


// GET all comments for specific show_id
commentsRouter.get('/:comment_id', (req, res)=>{
    const { comment_id } = req.params
    commentsServices.read(comment_id)
    .then((response)=>{
        console.log('helloResponseOrder',response)
        res.status(200)
        res.json(response)
    })
    .catch(err=>{
        console.log('Something went wrong in get all comments route',err)
        res.json('Something went wrong in get all comments route')
    })
    
})







module.exports={ commentsRouter }