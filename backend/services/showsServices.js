const { db } = require('./dbconnection');
const showsServices = {};


// POST new show
showsServices.create=()=>{
    return db.one()
};

// GET all shows
showsServices.read=()=>{
    return db.any()
};

// GET all shows for specific genre_id
showsServices.readByGenre=()=>{
    return db.any()
};

//GET all shows for specific user_id
showsServices.readByUserid=()=>{
    return db.any()
};


// GET one show
showsServices.readByShowid=()=>{
    return db.any()
};


module.exports = showsServices
