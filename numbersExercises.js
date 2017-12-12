var isInputsValid
var validationMessage

function createTable(){
var table = document.getElementById("numberTable");
var existingRowCount
var existingRowCount = table.rows.length
var exercises = [];

	if(existingRowCount > 0){
		for(var i = 1 ; i <= existingRowCount; i++){
			table.deleteRow(existingRowCount - i)
		}
	}

	validateInput(document.getElementById('rowCount'))

	if(isInputsValid == true){
		var rowCount = document.getElementById('rowCount').value
		for(var i = 0; i < rowCount; i++){
				createRow(table);
				fillRow();
			}
		}	else {
				alert(validationMessage);

		}

function fillRow(){
			var lastRow = table.rows.length - 1;
			var usedNumbers = document.getElementById("usedNumbers").value;
			var first = Math.floor(Math.random() * usedNumbers);
			var signNum = Math.floor(Math.random() * 2);
			var second = calcSecond(signNum, first, usedNumbers);
			var exercise = new Exercise(first,signNum,second);
			exercises.push(exercise);
			var lastExercise = exercises.length - 1;
			var cells = table.rows[lastRow].cells;
			var insertText = document.createElement('input');
			insertText.id = lastExercise + 1;
			insertText.setAttribute("class", "input-text")
			insertText.addEventListener('change', function(){return check(exercises, insertText.id, insertText.value)})
			cells[0].innerHTML = exercises[lastExercise].first;
			cells[1].innerHTML = exercises[lastExercise].signText;
			cells[2].innerHTML = exercises[lastExercise].second;
			cells[3].innerHTML = "=";
			cells[4].appendChild(insertText);
}

function Exercise(first, sign, second){
		this.first = first;
		this.signNum = sign;
		this.signText = getSignText(this.signNum);
		this.second = second;
		this.result = calcResult(this.first, this.second, this.signNum);
		}

}
