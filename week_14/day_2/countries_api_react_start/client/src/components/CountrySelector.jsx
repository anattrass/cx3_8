var React = require('react');

var CountrySelector = React.createClass({
  getInitialState: function(){
    return {selectedIndex: undefined};
  },
  handleChange: function(event) {
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});
    this.props.selectCountry(this.props.countries[newIndex]);
  },
  render: function () {
    var options = this.props.countries.map(function(country, index){
      return <option value={index} key={index}>{country.name}</option>
    })
    return (
      <select id="countries" value={this.state.selectedIndex} onChange={this.handleChange}>
        {options}
      </select>
    );
  }
});

module.exports = CountrySelector;
