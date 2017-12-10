function showHideMain(selectedExercise){
  if(selectedExercise == 'sideNumberExercises'){
    document.getElementById('numberExercises').style.visibility = 'visible';
  } else if (selectedExercise == 'sideLetterExercises'){
    document.getElementById('numberExercises').style.visibility = 'hidden';
  }
}
