var first = JSON.parse(data)
var table = document.getElementById('letterTable')
var exercise = first['0'].exerciseText.toUpperCase()
table.insertRow();
for(var i = 0; i < exercise.length; i++){
  table.rows[0].insertCell()
  if(i == 3 - 1){
  var insertText = document.createElement('input');
  insertText.id = 'insertText_' + i;
  insertText.setAttribute("class", "input-text")
  table.rows[0].cells[i].appendChild(insertText)
  } else {
  table.rows[0].cells[i].innerHTML = exercise.charAt(i);
}
}
