var React = require('react');

var CountryDetail = function(props) {
    if (!props.country) {
      return <h4>No Country Selected </h4>
    }
    return (<div>
      <h4>Name: {props.country.name}</h4> 
      <h4>Population: {props.country.population}</h4>
      <h4>Capital City: {props.country.capital}</h4>
      <h4>Local Name: {props.country.demonym}</h4>
      </div>)
};

module.exports = CountryDetail;
