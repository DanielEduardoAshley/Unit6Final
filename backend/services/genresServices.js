const { db } = require('./dbconnection');
const genresServices = {};



// GET all genres
genresServices.read=(genre_name)=>{
    return db.any('SELECT * FROM genres', {genre_name})
};



module.exports = genresServices 

