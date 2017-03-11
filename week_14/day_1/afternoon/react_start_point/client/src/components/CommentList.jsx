var React = require('react');

var Comment = require('./Comment.jsx');

var CommentList = React.createClass({

  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  render: function() {

    var commentNodes = this.props.data.map(function(comment){
        return(
            <Comment author={ comment.author } key={ comment.id }>
              { comment.text }
            </Comment>
          );
    });

    return (
        <div className="comment-list">
            <p>I am a CommentList</p>

            { commentNodes }
        </div>
      );
  }
});

module.exports = CommentList;