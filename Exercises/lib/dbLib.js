function getRandomLetterExerciseFromDb(callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var resopnseJS = JSON.parse(this.response)
        callback(resopnseJS)
    }
  };
  xhttp.open('GET', 'http://localhost:8080/randomLetterExercise', true)
  xhttp.send();
}

function createLetterExerciseInDb(data, callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var resopnseJS = JSON.parse(this.response)
        callback(resopnseJS)
    }
  };
  xhttp.open('POST', 'http://localhost:8080/createLetterExercise', true)
  xhttp.send(data);
}
