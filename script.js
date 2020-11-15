let plusButton = document.querySelector("#plusButton");
let firstNumber = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");
let	answer=document.querySelector("h4");
    console.log(plusButton,firstNumber,secondNumber)
plusButton.onclick = function(event){
	event.preventDefault();
	answer.innerHTML="Ответ: "+(parseInt(firstNumber.value) + parseInt(secondNumber.value));
}
let minusButton = document.querySelector("#minusButton");
minusButton.onclick = function(event){
	event.preventDefault();
	answer.innerHTML="Ответ: "+(parseInt(firstNumber.value)-parseInt(secondNumber.value));
}
let divideButton = document.querySelector("#divideButton");
divideButton.onclick = function(event){
	event.preventDefault();
	answer.innerHTML="Ответ: "+(parseInt(firstNumber.value)/parseInt(secondNumber.value))
}
let multiplyButton = document.querySelector("#multiplyButton");
multiplyButton.onclick = function(event){
	event.preventDefault();
	answer.innerHTML="Ответ: "+(parseInt(firstNumber.value)*parseInt(secondNumber.value))
}