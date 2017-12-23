var letterExercise = {
  'numberArray' : [],
  'uniqueLetterCount' : 0,
  'uniqueLetters' : [],
  'uniqueNumbers' : [],
  'inputLetterMap' : [],
  'exerciseText' : ''
};

function createLetterExercise(){
var letterTable = document.getElementById('letterTable')
  createContainer();
  getRandomExerciseFromDb(getAndCountUniqueLetters);
}

function createInputTable(){

letterExercise.inputLetterMap = []
letterTable = document.createElement('table');
letterTable.id = 'letterTable';
document.getElementById('letterExercises').appendChild(letterTable);
letterTable.insertRow();
letterTable.insertRow();
letterTable.insertRow();

  for(var i = 0; i < letterExercise.exerciseText.length; i++){
    letterTable.rows[0].insertCell()
    letterTable.rows[1].insertCell()
    letterTable.rows[2].insertCell()
    var textInput = document.createElement('input');
    textInput.id = 'insertText_' + i;
    textInput.setAttribute("class", "input-text")
    textInput.setAttribute('maxlength', '1')
    textInput.addEventListener('change', function(){return checkLetter(letterExercise.inputLetterMap, this.id, this.value)})
    letterTable.rows[1].cells[i].appendChild(textInput)
    letterTable.rows[2].cells[i].innerHTML = letterExercise.uniqueNumbers[letterExercise.uniqueLetters.indexOf(letterExercise.exerciseText.charAt(i))];
    letterExercise.inputLetterMap[textInput.id] = [letterExercise.exerciseText.charAt(i), i];
  }
}

function checkLetter(inputLetterMap, insertTextId, value){
  if(inputLetterMap[insertTextId][0] == value.toUpperCase()){
    letterTable.rows[0].cells[inputLetterMap[insertTextId][1]].innerHTML = "<img src='images/YES.png' width='25' height='25'>"
    } else {
      letterTable.rows[0].cells[inputLetterMap[insertTextId][1]].innerHTML = "<img src='images/NO.png' width='25' height='25'>"
  }
}

function getAndCountUniqueLetters(dbExercises){
  letterExercise.exerciseText = (dbExercises[0].exercise_text).toUpperCase();
  letterExercise.uniqueLetterCount = 0;
  letterExercise.uniqueLetters = [];
  for(var i = 0; i < letterExercise.exerciseText.length; i++ ){
    if(!letterExercise.uniqueLetters.includes(letterExercise.exerciseText[i])){
        letterExercise.uniqueLetters.push(letterExercise.exerciseText[i]);
        letterExercise.uniqueLetterCount++
    }
  }
  generateNumbersForUniqueLetters();
  createInputTable();
  createLetterNumberTable();
}

function generateNumbersForUniqueLetters(){
  letterExercise.uniqueNumbers = [];
  tempRandomNumberArray = [];
    for (var i = 0; letterExercise.uniqueLetterCount > i; i++){
        tempRandomNumberArray[i] = i + 1;
      }
    for (var i = letterExercise.uniqueLetterCount; i > 0; i--){
      var number = Math.floor(Math.random() * i);
      letterExercise.uniqueNumbers.push(tempRandomNumberArray.splice(number, 1));
  }
}


function createContainer(){
  var main = document.getElementById('main');
  var existingLetterExercises = document.getElementById('letterExercises');
  if(!!existingLetterExercises){
    main.removeChild(existingLetterExercises);
  }
  divLetterExercises = document.createElement('div');
  divLetterExercises.id = 'letterExercises';
  divLetterExercises.class = 'letterExercises';
  divLetterExercises.style = 'visibility:visible'
  document.getElementById('main').appendChild(divLetterExercises);
}

function createLetterNumberTable(){
  var numberTable = document.createElement('table');
  var tempNumberArray = letterExercise.uniqueNumbers.slice();
  var tempLetterArray = letterExercise.uniqueLetters.slice();

  numberTable.id = 'numberTable';
  numberTable.border = '1';

  for (var i = letterExercise.uniqueLetterCount; 0 < i ; i--){
    randomNumber = Math.floor(Math.random() * i);
    randomLetterFromArray = tempLetterArray[randomNumber];
    randomNumberFromArray = tempNumberArray[randomNumber];
    tempNumberArray.splice(randomNumber, 1);
    tempLetterArray.splice(randomNumber, 1);
    numberTable.insertRow();
    var lastRow = numberTable.rows.length - 1;
    numberTable.rows[lastRow].insertCell();
    numberTable.rows[lastRow].insertCell();
    numberTable.rows[lastRow].cells[0].innerHTML = randomLetterFromArray;
    numberTable.rows[lastRow].cells[1].innerHTML = randomNumberFromArray;
  }
document.getElementById('letterExercises').appendChild(numberTable);
}
