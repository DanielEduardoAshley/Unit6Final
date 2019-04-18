const { db } = require('./dbconnection');
const usersServices = {};

// POST new user
usersServices.create=(username)=>{
    return db.any('INSERT INTO users (username) VALUES ($[username])', {username})

};

// GET all users
usersServices.read=()=>{
    return db.any('Select * FROM users ')

};

// GET single user
usersServices.readOne=(id)=>{
    return db.one('SELECT * FROM users WHERE id=$[id]', {id})
};


module.exports = usersServices