const { db } = require('./dbconnection');
const commentsServices = {};

// POST new comment
commentsServices.create=(comment_body, user_id, show_id)=>{
    return db.one('INSERT INTO comments (comment_body, user_id, show_id) VALUES ($[comment_body], $[user_id], $[show_id])')
};


// GET all comments for specific show_id
commentsServices.read=(show_id)=>{
    return db.any('SELECT * FROM shows WHERE show_id=$[show_id]', {show_id})
};

module.exports = commentsServices