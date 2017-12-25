var mysqlDb = require('mysql');
var settings = require('../settings')

exports.executeSql = function(sql, callback){
  var con = mysqlDb.createConnection(settings.dbConfig);
  con.connect();
  con.query(sql, function(err, result){
    if(err) {
      console.log(err);
      callback(null, err);
    } else {
      callback(result);
    }
  })
}

exports.insertSql = function(sql, value, callback){
  var con = mysqlDb.createConnection(settings.dbConfig);
  con.connect();
  con.query(sql, value, function(err, result){
    if(err) {
      console.log(err);
      callback(null, err);
    } else {
      callback(result);
    }
});
}
