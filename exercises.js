function createTable(){
var table = document.getElementById("table");
var rowCount = document.getElementById('rowCount').value
var exercises = [];

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
		alert('Pareizi!')
	} else {
		alert('Nepareizi!')
	}
}

function fillRow(){
			var lastRow = table.rows.length - 1;
			var first = Math.floor(Math.random() * 10);
			var signNum = Math.floor(Math.random() * 2);
			var second = Math.floor(Math.random() * 10);
			var exercise = new Exercise(first,signNum,second);
			exercises.push(exercise);
			var lastExercise = exercises.length - 1;
			var cells = table.rows[lastRow].cells;
			var insertText = document.createElement('input');
			insertText.id = lastExercise + 1;
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


	for(var i = 0; i < rowCount; i++){
		createRow();
		fillRow();
	}

}
