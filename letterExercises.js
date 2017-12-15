var first = JSON.parse(data)
var letterTable = document.getElementById('letterTable')
var exercise = first['0'].exerciseText.toUpperCase()
var numberArray = [];
var uniqueLetterCount = 0;
var uniqueLetters = [];
var uniqueNumbers = [];

function createLetterExercise(){
  createContainer();
  getAndCountUniqueLetters();
  generateNumbersForUniqueLetters();
  createInputTable();
  createLetterNumberTable();

function createInputTable(){


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
  textInput.addEventListener('change', function(){return checkLetter(exercise, this.id, this.value)})
  letterTable.rows[1].cells[i].appendChild(textInput)
  letterTable.rows[2].cells[i].innerHTML = uniqueNumbers[uniqueLetters.indexOf(exercise.charAt(i))];

}
}
}

function checkLetter(exercise, insertTextId, value){
  var id = insertTextId.substr(insertTextId.length - 1)
if(exercise.charAt(id) == value.toUpperCase()){
  letterTable.rows[0].cells[id].innerHTML = "<img src='images/YES.png' width='25' height='25'>"
} else {
  letterTable.rows[0].cells[id].innerHTML = "<img src='images/NO.png' width='25' height='25'>"
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
