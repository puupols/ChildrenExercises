var first = JSON.parse(data)
var table = document.getElementById('letterTable')
var exercise = first['0'].exerciseText.toUpperCase()
var numberArray = [];
var uniqueLetterCount = 0;
var uniqueLetters = [];
var uniqueNumbers = [];
getAndCountUniqueLetters();
generateNumbersForUniqueLetters()
table.insertRow();
table.insertRow();
table.insertRow();
for(var i = 0; i < exercise.length; i++){
  table.rows[0].insertCell()
  table.rows[1].insertCell()
  table.rows[2].insertCell()
  if(i == 5 || i == 6){

  var insertText = document.createElement('input');
  insertText.id = 'insertText_' + i;
  insertText.setAttribute("class", "input-text")
  insertText.addEventListener('change', function(){return checkLetter(exercise, insertText.id, insertText.value)})

  table.rows[1].cells[i].appendChild(insertText)
  table.rows[2].cells[i].innerHTML = uniqueNumbers[uniqueLetters.indexOf(exercise.charAt(i))];
  } else {
  table.rows[1].cells[i].innerHTML = exercise.charAt(i);
  table.rows[2].cells[i].innerHTML = uniqueNumbers[uniqueLetters.indexOf(exercise.charAt(i))];
}
}

function checkLetter(exercise, insertTextId, value){
  var id = insertTextId.substr(insertTextId.length - 1)
if(exercise.charAt(id) == value.toUpperCase()){
  table.rows[0].cells[id].innerHTML = "<img src='images/YES.png' width='25' height='25'>"
} else {
  table.rows[0].cells[id].innerHTML = "<img src='images/NO.png' width='25' height='25'>"
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
