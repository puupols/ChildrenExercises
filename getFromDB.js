function getExerciseFromDb(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var resopnseJS = JSON.parse(this.response)
      document.getElementById('fromDB').innerHTML = resopnseJS[0].exercise_text;
    }
  };
  xhttp.open('GET', 'http://localhost:8080/?query=getExercise', true)
  xhttp.send();
}
