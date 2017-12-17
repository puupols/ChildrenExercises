function getExerciseFromDb(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 0){
      document.getElementById('fromDB').innerHTML = this.responseXML;
    }
  };
  xhttp.open('GET', 'http://localhost:8080/?query=getExercise', true)
  xhttp.send();
}
