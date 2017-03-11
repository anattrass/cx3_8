// window.onload = function(){
//   console.log("webpack app started");
// };

var React = require('react');
var ReactDOM = require('react-dom');

window.onload = function() {
  // var header = React.createElement('h1', null, "same to you my dear sweet pumpkin!");
  var appDiv = document.querySelector('#app');

  // ReactDOM.render(header, appDiv);
  ReactDOM.render(
    <h1>Hello Federico Zucca!</h1>,
    appDiv
    );
};
