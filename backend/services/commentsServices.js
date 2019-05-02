const { dbConn, dbUrl } = require('./dbconnection');
const commentsServices = {};

// POST new comment
commentsServices.create=(comment_body, user_id, show_id)=>{
    return dbConn(dbUrl).none('INSERT INTO comments (comment_body, user_id, show_id) VALUES ($[comment_body], $[user_id], $[show_id])', { comment_body, user_id, show_id })
};


// GET all comments for specific show_id
commentsServices.read=(show_id)=>{
    return dbConn(dbUrl).any('SELECT * FROM comments WHERE id=$[show_id]', {show_id})
};

module.exports = commentsServices