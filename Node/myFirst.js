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

con.connect();
http.createServer(function(req, res){
  var request = url.parse(req.url, true);
  if(!(request.pathname == '/favicon.ico')){
  console.log(request.pathname);
  return processRequest(req, res);
}
  }).listen(8080)

function processRequest(req, res){
  var request = url.parse(req.url, true).query;
  console.log('query request: ' + request.query);
  getResult(request.query, function(qresult){
  console.log('outer ' + qresult);
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(qresult);
  res.end();});

}



function getResult(request, finishResponse) {
  console.log(request == 'getExercise');
  if (request == 'getExercise'){
  con.query(selectExercise, [selectExerciseParams], function(err, result){
    if(err) throw err;
    console.log(result);
    qresult = result[0].exercise_text;
    finishResponse(qresult);
  });

} else {
  qresult = 'ERROR';
  finishResponse(qresult);
}
;
}
