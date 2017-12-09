
function setSelectedRange(){
		document.getElementById("selectedRange").innerHTML = document.getElementById("usedNumbers").value
}


function createTable(){

	var table = document.getElementById("table");
	var exercises = [];
	var existingRowCount = table.rows.length
 	var validationMessage

	if(existingRowCount > 0){
		for(var i = 1 ; i <= existingRowCount; i++){
			table.deleteRow(existingRowCount - i)
		}
	}

	if(validateInputs()){
		var rowCount = document.getElementById('rowCount').value
		for(var i = 0; i < rowCount; i++){
				createRow();
				fillRow();
			}
		}	else {
				alert(validationMessage);

		}

function validateInputs(){
	return validateInput(document.getElementById('rowCount'))
}

function validateInput(validationField){
	if(!validationField.checkValidity()){
		validationMessage = validationField.name + ' : ' + validationField.validationMessage;
		return false;
	}else{
		return true;
	}
}

function getSignText(signNum){
	switch(signNum){
		case 0 : return '+';
		 break;
		case 1 : return '-';
		 break;
		default : return '+'
	}
}

function calcResult(x, y, signNum){
	switch(signNum){
		case 0 : return parseInt(x) + parseInt(y);
		break;
		case 1: return parseInt(x) - parseInt(y);
		break;
		default : return x;
	}
}

function createRow(){
	table.insertRow();
	var lastRow = table.rows.length - 1;
	table.rows[lastRow].insertCell();
	table.rows[lastRow].insertCell();
	table.rows[lastRow].insertCell();
	table.rows[lastRow].insertCell();
	table.rows[lastRow].insertCell();
	table.rows[lastRow].insertCell();
}

function check(id, value){
	if ((exercises[id - 1].result) == value){
		table.rows[id - 1].cells[5].innerHTML = "<img src='images/YES.png' width='25' height='25'>"
	} else {
		table.rows[id - 1].cells[5].innerHTML = "<img src='images/NO.png' width='25' height='25'>"
	}
}

function calcSecond(sign, first, usedNumbers){
	var useNegatives = document.getElementById('useNegatives').checked
		if(useNegatives == false && sign == 1){
			return Math.floor(Math.random() * (usedNumbers - (usedNumbers - first)));
			} else {
			return Math.floor(Math.random() * usedNumbers);
		}

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
			insertText.addEventListener('change', function(){return check(insertText.id, insertText.value)})
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
