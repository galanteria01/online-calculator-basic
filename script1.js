
function them(val){
	document.getElementById("result").value += val;
	return false;
}

function solve(){
	let x = document.getElementById('result').value;
	let y = eval(x);
	document.getElementById('result').value = y;
}

function clr(){
	document.getElementById("result") = "";
}