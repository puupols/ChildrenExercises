var db = require('../core/db');

exports.getRandomExercise = function(req, resp){
  db.executeSql('SELECT * FROM LETTER_EXERCISE ORDER BY RAND() LIMIT 1', function(data, err){
    if(err){
      resp.writeHead(500, 'Internal error ocured', {'Content-type': 'text/html'});
      resp.write('<html><head><title>500</title></head><body>500: interlal error. Details: ' + err + '</body></html>')
    } else {
      resp.writeHead(200, {'Access-Control-Allow-Origin' : '*', 'Content-Type': 'application/json'});
      resp.write(JSON.stringify(data));
      console.log(JSON.stringify(data));
    }
    resp.end();
  });
};
