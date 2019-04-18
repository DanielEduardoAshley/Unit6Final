const { db } = require('./dbconnection');
const showsServices = {};


// POST new show
showsServices.create=(title, img_url, user_id, genre_id)=>{
    return db.one('INSERT INTO shows (title, img_url, user_id, genre_id) VALUES ($[title], $[img_url],$[user_id],$[genre_id])', {title, img_url, user_id, genre_id})
};

// GET all shows
showsServices.read=()=>{
    return db.any('SELECT * FROM shows')
};

// GET all shows for specific genre_id
showsServices.readByGenre=(genre_id)=>{
    return db.any('SELECT * FROM shows WHERE genre_id=$[genre_id]', { genre_id })
};

//GET all shows for specific user_id
showsServices.readByUserid=(user_id)=>{
    return db.any('SELECT * FROM shows WHERE user_id=$[user_id]', {user_id})
};


// GET one show
showsServices.readByShowid=(id)=>{
    return db.any('SELECT * FROM shows WHERE id=$[id]', {id})
};


module.exports = showsServices
