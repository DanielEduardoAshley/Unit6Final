const { dbConn, dbUrl } = require('./dbconnection');
const genresServices = {};



// GET all genres
genresServices.read=(genre_name)=>{
    return dbConn(dbUrl).any('SELECT * FROM genres', {genre_name})
};



module.exports = genresServices 

