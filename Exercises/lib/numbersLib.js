function validateInput(validationField){
	if(!validationField.checkValidity()){
		validationMessage = validationField.name + ' : ' + validationField.validationMessage;
		isInputsValid = false;
	}else{
		isInputsValid = true;
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

function createRow(table){
	table.insertRow();
	var lastRow = table.rows.length - 1;
	table.rows[lastRow].insertCell();
	table.rows[lastRow].insertCell();
	table.rows[lastRow].insertCell();
	table.rows[lastRow].insertCell();
	table.rows[lastRow].insertCell();
	table.rows[lastRow].insertCell();
}

function check(exercises, id, value){
	var table = document.getElementById("numberTable");
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

function setSelectedRange(){
		document.getElementById("selectedRange").innerHTML = document.getElementById("usedNumbers").value
}
