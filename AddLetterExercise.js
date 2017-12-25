function sideAddLetterExercise(){
createContainer();
createTextInput();
createAddButton();

  function createContainer(){
    var main = document.getElementById('main');
    var existingLetterExercises = document.getElementById('addLetterExercisesDiv');
    if(!!existingLetterExercises){
      main.removeChild(existingLetterExercises);
    }
    divLetterExercises = document.createElement('div');
    divLetterExercises.id = 'addLetterExercisesDiv';
    divLetterExercises.class = 'letterExercises';
    divLetterExercises.style = 'visibility:visible'
    document.getElementById('main').appendChild(divLetterExercises);
  }

  function createTextInput(){
    var textInput = document.createElement('input');
    textInput.id = 'addLetterExerciseText';
    textInput.setAttribute('class', 'input-text');
    textInput.setAttribute('maxlength', '16');
    document.getElementById('addLetterExercisesDiv').appendChild(textInput);
  }

  function createAddButton(){
    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.id = 'addButton';
    button.setAttribute('value', 'Sūtīt')
    button.addEventListener('click', function(){
      var data = {'EXERCISE_TEXT' : ''};
      data.EXERCISE_TEXT = document.getElementById('addLetterExerciseText').value;
      createLetterExerciseInDb(JSON.stringify(data), Popup);
    });
    document.getElementById('addLetterExercisesDiv').appendChild(button);
  }

  function Popup(data){
    window.alert('Veiksmīgi ievietoto rindu skaits: ' + data.affectedRows);
  }
}
