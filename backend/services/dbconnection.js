const pg = require('pg-promise');
const dbUrl = 'postgres://localhost/tvwatchlistapp';

const dbConn = (function(){
    let dbConnection = null;
    return function(dbUrl){
        if(!dbConnection){
            dbConnection = pg({})(dbUrl)
        }

        return dbConnection
    }

})();

module.exports= { dbConn, dbUrl }