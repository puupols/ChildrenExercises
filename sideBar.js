function showHideMain(selectedExercise){
  if(selectedExercise == 'sideNumberExercises'){
    document.getElementById('numberExercises').style.visibility = 'visible';
    document.getElementById('letterExercises').style.visibility = 'hidden';
  } else if (selectedExercise == 'sideLetterExercises'){
    createLetterExercise();
  } else if (selectedExercise == 'sideAddLetterExercise'){
    sideAddLetterExercise();
  }
}
