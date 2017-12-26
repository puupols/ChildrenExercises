var db = require('../core/db');

exports.getRandomLetterExercise = function(req, resp){
  db.executeSql('SELECT * FROM LETTER_EXERCISE ORDER BY RAND() LIMIT 1', function(data, err){
    if(err){
      resp.writeHead(500, 'Internal error ocured', {'Access-Control-Allow-Origin' : '*', 'Content-type': 'text/html'});
      resp.write('<html><head><title>500</title></head><body>500: interlal error. Details: ' + err + '</body></html>')
    } else {
      resp.writeHead(200, {'Access-Control-Allow-Origin' : '*', 'Content-Type': 'application/json'});
      resp.write(JSON.stringify(data));
      console.log(JSON.stringify(data));
    }
    resp.end();
  });
};

exports.createLetterExercise = function(req, resp, reqBody){
  var sql = 'INSERT INTO LETTER_EXERCISE SET ? ';
  var value = JSON.parse(reqBody);
  db.insertSql(sql, value, function (result, err) {
      if (err){
          resp.writeHead(500, 'Internal error ocured', {'Access-Control-Allow-Origin' : '*', 'Content-type' : 'text/html'})
        } else {
          resp.writeHead(200, {'Access-Control-Allow-Origin' : '*', 'Content-Type' : 'application/json'});
          resp.write(JSON.stringify(result));
          console.log(result.affectedRows);
        }
        resp.end();
  });
}
