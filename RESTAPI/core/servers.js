var http = require('http');
var exercise = require('../controllers/exercise');


http.createServer(function(req, resp){
  switch(req.method){
    case 'GET': {
      if(req.url === '/'){
        resp.end();
      } else if(req.url === '/randomLetterExercise') {
        exercise.getRandomLetterExercise(req, resp);
      };
    }
    case 'POST' : {
      if(req.url === '/'){
        resp.end();
      } else if (req.url === '/createLetterExercise'){
        var reqBody = '';
        req.on('data', function(data){
          reqBody += data;
        });
        req.on('end', function(){exercise.createLetterExercise(req, resp, reqBody)});
      }
    }
  }
  }).listen(8080)
