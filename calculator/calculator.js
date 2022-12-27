let output;
let toValue = '' ;
let π = 3.14;
let lastValue = '';
function disp(value){
	output = document.getElementById("dispOut");
	lastValue = value;
	toValue += value;
	output.value = toValue;
}
function clearos(){output.value=''; toValue='';}
function dele(){toValue = toValue.slice(0,-1);output.value = toValue;}
function point()
{
	if(output.value.includes(".")){return;}
	else{
		if(output.value == ''|| output.value == null|| output.value == 0)
		{disp('0.')}	else{disp('.')}
		}
}
function sct(v){
	output.value = Math[v](output.value);
	toValue= output.value;
}
function x2f(){
	output.value = 2 * parseFloat(output.value);
	toValue= output.value;
}
function pmf(){
	output.value = - Math.abs(output.value);
	toValue= output.value;
}
function calc(){
	try{
	output.value = eval(output.value);
	toValue= output.value;
	}
	catch{
		alert("Syntax Error");
		toValue= output.value;
	}
}