var counter = 0;
var handleButtonClick = function(event){
  counter += 1;
  var buttonResult = document.querySelector('#button-result');
  buttonResult.innerText = 'Woah! I totally just got clicked, this many times - ' + counter + ' man!';

  console.log(event);
};

var handleKeyPress = function(){
  var textResult = document.querySelector('#text-result');
  // the below two lines do the same as the third.... what?!?!
  // var input = document.querySelector('input');
  // textResult.innerText = input.value;
  textResult.innerText = this.value;
};

var handleSelectChange = function(){
  var selectResult = document.querySelector('#select-result');
  selectResult.innerText = this.value + '! Excellent!';
};

var app = function(){
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

  var input = document.querySelector('input');
  input.onkeyup = handleKeyPress;

  var select = document.querySelector('select');
  select.onchange = handleSelectChange;
};

window.onload = app;
