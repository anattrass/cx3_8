var React = require("react");

var CommentList = require('./CommentList.jsx');

var comments = [
    {id: 1, author: 'Jarrod', text: "I'm hungry"},
    {id: 2, author: 'John & Jarrod', text: "I'm sleepy"}
];

var CommentBox = React.createClass({

  getInitialState: function() {
    return { data: comments };
  },
  
  render: function() {
    return (
        <div className="comment-box">
            <p>I am a CommentBox</p>
            <CommentList data={ this.state.data }/>
        </div>
    );
  }
});

module.exports = CommentBox;