const express = require('express');
const genresRouter = express.Router();
const genresServices = require('../services/genresServices');


// GET all genres
genresRouter.get('/',(req, res)=>{
    genresServices.read()
    .then((response)=>{
        console.log('GENRE RESPONSE', response)
        res.status(200)
        res.json(response)
    })
    .catch(err=>{
        console.log('Something went wrong with get all genres', err)
        res.json('Something went wrong with get all genres get all route')
    })
   

    
})



module.exports={ genresRouter }