var first = JSON.parse(data)
var letterTable = document.getElementById('letterTable')
var exercise = first['0'].exerciseText.toUpperCase()
var numberArray = [];
var uniqueLetterCount = 0;
var uniqueLetters = [];
var uniqueNumbers = [];
getAndCountUniqueLetters();
generateNumbersForUniqueLetters()
createLetterNumberTable()
letterTable.insertRow();
letterTable.insertRow();
letterTable.insertRow();

for(var i = 0; i < exercise.length; i++){
  letterTable.rows[0].insertCell()
  letterTable.rows[1].insertCell()
  letterTable.rows[2].insertCell()
  if(i == 5 || i == 6){

  var insertText = document.createElement('input');
  insertText.id = 'insertText_' + i;
  insertText.setAttribute("class", "input-text")
  insertText.addEventListener('change', function(){return checkLetter(exercise, this.id, this.value)})

  letterTable.rows[1].cells[i].appendChild(insertText)
  letterTable.rows[2].cells[i].innerHTML = uniqueNumbers[uniqueLetters.indexOf(exercise.charAt(i))];
  } else {
  letterTable.rows[1].cells[i].innerHTML = exercise.charAt(i);
  letterTable.rows[2].cells[i].innerHTML = uniqueNumbers[uniqueLetters.indexOf(exercise.charAt(i))];
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
  for(var i = 0; i < exercise.length; i++ ){
    if(!uniqueLetters.includes(exercise[i])){
      uniqueLetters.push(exercise[i]);
      uniqueLetterCount++
    }
  }
}

function generateNumbersForUniqueLetters(){
    for (var i = 0; uniqueLetterCount > i; i++){
      var number = Math.floor(Math.random() * 13);
      while (uniqueNumbers.includes(number)){
        number = Math.floor(Math.random() * uniqueLetterCount);
      }
      uniqueNumbers.push(number);
  }
}

function createLetterNumberTable(){
  var numberTable = document.createElement('table');
  numberTable.id = 'numberTable';
  numberTable.border = '1';
for (var i = 0; uniqueLetterCount > i ; i++)
  {numberTable.insertRow();
  var lastRow = numberTable.rows.length - 1;
  numberTable.rows[lastRow].insertCell();
  numberTable.rows[lastRow].insertCell();
  numberTable.rows[lastRow].cells[0].innerHTML = uniqueLetters[i];
  numberTable.rows[lastRow].cells[1].innerHTML = uniqueNumbers[i];
}
document.getElementById('letterExercises').appendChild(numberTable);
}
