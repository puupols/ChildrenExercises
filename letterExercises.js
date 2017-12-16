var numberArray = [];
var uniqueLetterCount = 0;
var uniqueLetters = [];
var uniqueNumbers = [];
var inputLetterMap = [];
var exercise;
function createLetterExercise(){
var letterTable = document.getElementById('letterTable')
  getLetterExercise();
  createContainer();
  getAndCountUniqueLetters();
  generateNumbersForUniqueLetters();
  createInputTable();
  createLetterNumberTable();


}
function getLetterExercise(){
  var letterExerciseData = JSON.parse(data)
  var randoNumber = Math.floor(Math.random() * Object.keys(letterExerciseData).length)
  exercise = letterExerciseData[randoNumber].exerciseText.toUpperCase()
}

function createInputTable(){

inputLetterMap = []
letterTable = document.createElement('table');
letterTable.id = 'letterTable';
document.getElementById('letterExercises').appendChild(letterTable);
letterTable.insertRow();
letterTable.insertRow();
letterTable.insertRow();

for(var i = 0; i < exercise.length; i++){
  letterTable.rows[0].insertCell()
  letterTable.rows[1].insertCell()
  letterTable.rows[2].insertCell()
  var textInput = document.createElement('input');
  textInput.id = 'insertText_' + i;
  textInput.setAttribute("class", "input-text")
  textInput.setAttribute('maxlength', '1')
  textInput.addEventListener('change', function(){return checkLetter(inputLetterMap, this.id, this.value)})
  letterTable.rows[1].cells[i].appendChild(textInput)
  letterTable.rows[2].cells[i].innerHTML = uniqueNumbers[uniqueLetters.indexOf(exercise.charAt(i))];
  inputLetterMap[textInput.id] = [exercise.charAt(i), i];
}
}

function checkLetter(inputLetterMap, insertTextId, value){
  if(inputLetterMap[insertTextId][0] == value.toUpperCase()){
    letterTable.rows[0].cells[inputLetterMap[insertTextId][1]].innerHTML = "<img src='images/YES.png' width='25' height='25'>"
    } else {
      letterTable.rows[0].cells[inputLetterMap[insertTextId][1]].innerHTML = "<img src='images/NO.png' width='25' height='25'>"
  }
}

function getAndCountUniqueLetters(){
  uniqueLetterCount = 0;
  uniqueLetters = [];
  for(var i = 0; i < exercise.length; i++ ){
    if(!uniqueLetters.includes(exercise[i])){
        uniqueLetters.push(exercise[i]);
        uniqueLetterCount++
    }
  }
}

function generateNumbersForUniqueLetters(){
  uniqueNumbers = [];
    for (var i = 0; uniqueLetterCount > i; i++){
      var number = Math.floor(Math.random() * 13);
      while (uniqueNumbers.includes(number)){
        number = Math.floor(Math.random() * uniqueLetterCount);
      }
      uniqueNumbers.push(number);
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
  var tempNumberArray = [];
  var tempLetterArray = [];
  var tempNumberArray = uniqueNumbers.slice();
  var tempLetterArray = uniqueLetters.slice();

  numberTable.id = 'numberTable';
  numberTable.border = '1';

  for (var i = uniqueLetterCount; 0 < i ; i--){
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
