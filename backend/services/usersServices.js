const { dbConn, dbUrl } = require('./dbconnection');
const usersServices = {};

// POST new user
usersServices.create=(username)=>{
    return dbConn(dbUrl).any('INSERT INTO users (username) VALUES ($[username])', {username})

};

// GET all users
usersServices.read=()=>{
    return dbConn(dbUrl).any('Select * FROM users ')

};

// GET single user
usersServices.readOne=(id)=>{
    return dbConn(dbUrl).one('SELECT * FROM users WHERE id=$[id]', {id})
};


module.exports = usersServices