var React = require('react');
var PiggyBank = React.createClass({
  getInitialState: function(){
    console.log("in getInitialState");
    return { total: 0 }
    },
    addToSavings: function(){
      var input = document.querySelector("input")
      this.setState({
        total: this.state.total + parseInt(input.value)
      });
    },
    //componentWillMount, componentDidMount and render are functions that React calls so they need to have those exact names.
    componentWillMount: function() {
      console.log("component will mount!");
      var button = document.querySelector('button');
      console.log("Button:", button);
    }, 
    componentDidMount: function() {
      console.log("component did mount!");
      var button = document.querySelector('button');
      console.log("Button:", button);
    },
    componentWillUpdate: function(nextProps, nextState) {
      console.log("Component will update");
      console.log("Next State", nextState);
      console.log("Next Props", nextProps);
    },
    componentDidUpdate: function(prevProps, prevState) {
      console.log("Component has updated");
      console.log("Previous State", prevState);
      console.log("Previous Props", prevProps);
    },
    withdrawFromSavings: function(){
      var input = document.querySelector("input")
      if(this.state.total >= input.value) {
        this.setState({
          total: this.state.total - parseInt(input.value)
        });
      }
    },
    propTypes: {
      title: React.PropTypes.string.isRequired,
      owner: React.PropTypes.string.isRequired
    },
    render: function(){
      console.log("in render.......")
      return (
        <div className="bank-box">
        <h1>{this.props.title}</h1>
        <h1>Owner: {this.props.owner}</h1>
        <p>Total Savings: £{this.state.total}</p>
        <input type="number"></input>
        <button type="button" onClick={this.addToSavings}>Deposit Change</button>
        <button type="button" onClick={this.withdrawFromSavings}>Withdraw Change</button>
        </div>
        )
    }
  });

module.exports = PiggyBank;