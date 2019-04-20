const { dbConn, dbUrl } = require('./dbconnection');
const showsServices = {};


// POST new show
showsServices.create=(title, img_url, user_id, genre_id)=>{
    console.log('got to show service')
    console.log('thse',title, img_url, user_id, genre_id)
    return dbConn(dbUrl).none('INSERT INTO shows (title, img_url, user_id, genre_id) VALUES ($[title], $[img_url],$[user_id],$[genre_id])', {title, img_url, user_id, genre_id})
};

// GET all shows
showsServices.read=()=>{
    return dbConn(dbUrl).any('SELECT * FROM shows JOIN users ON users.id=user_id')
};

// GET all shows for specific genre_id
showsServices.readByGenre=(genre_id)=>{
    return dbConn(dbUrl).any('SELECT * FROM shows WHERE genre_id=$[genre_id]', { genre_id })
};

//GET all shows for specific user_id
showsServices.readByUserid=(user_id)=>{
    return dbConn(dbUrl).any('SELECT shows.id AS shows_id, title, img_url, user_id, genre_id FROM shows JOIN genres ON genre_id=genres.id WHERE user_id=$[user_id]', {user_id})
};


// GET one show
showsServices.readByShowid=(id)=>{
    return dbConn(dbUrl).any('SELECT shows.id AS shows_id, title, img_url, comment_body, username, genre_name, comments.id AS comments_id FROM shows JOIN comments ON shows.id=comments.show_id JOIN users ON users.id=comments.user_id JOIN genres ON genre_id=genres.id WHERE shows.id=$[id] ORDER BY comments_id', {id})
};


module.exports = showsServices
