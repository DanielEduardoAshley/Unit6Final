const { db } = require('./dbconnection');
const genresServices = {};



// GET all genres
genresServices.get=(genre_name)=>{
    return db.any('SELECT * FROM genres WHERE genre_name=$[genre_name]', {genre_name})
};



module.exports = genresServices 

