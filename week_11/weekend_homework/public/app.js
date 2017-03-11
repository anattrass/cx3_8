var object = null;


var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var populateList = function(){
  var select = document.querySelector("#character-list");

  object.forEach(function(character){
    var option = document.createElement("option");
    option.innerText = character.name;
    select.appendChild(option);
  });
};

var populateChart = function() {
  console.log(object);
  var container = document.querySelector('#column-chart');
  var ageData = [];
  for (var character of object) {
    if (character.yearOfBirth !== "") {
      ageData.push({name: character.name, data: [(2016 - character.yearOfBirth)]});
    }
  }
  new ColumnChart(container, ageData);
};

var requestComplete = function(){
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  object = JSON.parse(jsonString);

  populateChart();
  populateList();
  
};

var app = function(){
  var url = "http://hp-api.herokuapp.com/api/characters";
  makeRequest(url, requestComplete);

};

window.onload = app;