var mysqlDb = require('mysql');
var settings = require('../settings')

exports.executeSql = function(sql, callback){
  var con = mysqlDb.createConnection(settings.dbConfig);
  con.connect();
  con.query(sql, function(err, result){
    if(err) {
      console.log(err);
      callback(null, result);
    } else {
      callback(result);
    }
  })
}
