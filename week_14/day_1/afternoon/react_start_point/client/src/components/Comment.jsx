var React = require("react");

var Comment = React.createClass({

  propTypes: {
    author: React.PropTypes.string.isRequired,
    children: React.PropTypes.string.isRequired,
  },
  
  render: function() {
    return (
        <div className="comment">
            <h4>{ this.props.author }</h4>
            { this.props.children }
        </div>
    );
  }
});

module.exports = Comment;