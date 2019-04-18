const express = require('express');
const genresRouter = express.Router();
const genresServices = require('../services/genresServices');




// GET all genres
genresRouter.get('/',(req, res)=>{
    res.status(200)
    res.json('Got all genres')

    
})








module.exports={ genresRouter }