var http = require('http');
var exercise = require('../controllers/exercise');


http.createServer(function(req, resp){
  switch(req.method){
    case 'GET': {
      if(req.url === '/'){
        resp.end();
      } else if(req.url === '/randomExercise') {
        exercise.getRandomExercise(req, resp);
      };
    }
  }
  }).listen(8080)
