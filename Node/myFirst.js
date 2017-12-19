var http = require('http');
var mysql = require('mysql');
var url = require('url');
var insertLetterExercise = 'INSERT INTO letter_exercise (exercise_text) VALUES ?';
var selectExercise = 'SELECT * FROM letter_exercise WHERE id = ?';
var qresult;
var selectExerciseParams = '1'
var letterExerciseText = [['Zibens Makvīns']];


var con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'Ciupicipicss390',
  database : 'exercises'
});

http.createServer(function(req, res){
  processRequest(req, res);
  }).listen(8080)

function processRequest(req, res){
  var request = url.parse(req.url, true).query;
  getResult(request.query, function(qresult){
  res.writeHead(200, {'Access-Control-Allow-Origin' : '*', 'Content-Type': 'application/json'})
  res.write(JSON.stringify(qresult));
  res.end();});
}

function getResult(request, callback) {
  console.log(request == 'getExercise');
  if (request == 'getExercise'){
  con.connect();
  con.query(selectExercise, [selectExerciseParams], function(err, result){
    if(err) throw err;
    console.log(result);
    qresult = result;
    con.release();
    callback(qresult);
  });
  } else {
    qresult = 'ERROR';
    callback(qresult);
  };
}
