const pg = require('pg-promise')({});
const db = pg('postgres://localhost/tvwatchlistapp');



module.exports= { db }