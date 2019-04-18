const { db } = require('./dbconnection');
const usersServices = {};

usersServices.create=()=>{
    return db.any()

};

usersServices.read=()=>{
    return db.any()

};

usersServices.readOne=()=>{
    return db.one()
};


module.exports = usersServices