const express = require('express');
const genresRouter = express.Router();



// GET all genres
genresRouter.get('/',(req, res)=>{
    res.status(200)
    res.json('Got all genres')

    
})








module.exports={ genresRouter }