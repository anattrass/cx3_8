var React = require('react');
var ReactDOM = require('react-dom');
var PiggyBank = require('./components/PiggyBank.jsx')

window.onload = function(){
  ReactDOM.render(
    <PiggyBank title="Piggy Bank" owner="Pumpkin"/>,
    document.getElementById('app')
  );
}
