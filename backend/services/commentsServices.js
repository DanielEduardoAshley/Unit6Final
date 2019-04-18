const { db } = require('./dbconnection');
const commentsServices = {};

// POST new comment
commentsServices.create=()=>{
    return db.one()
};


// GET all comments for specific show_id
commentsServices.read=()=>{
    return db.any()
};

module.exports = commentsServices