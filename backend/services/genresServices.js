const { db } = require('./dbconnection');
const genresServices = {};



// GET all genres
genresServices.get=()=>{
    return db.any()
};



module.exports = genresServices 

