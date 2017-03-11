import React from 'react';

class TitleBar extends React.Component {
  render() {
  return (
    <div>
      <h2>UK Top 20 Songs</h2>
      <select onChange={this.props.handleSelectChange}>
        <option
          value={this.props.allSongsUrl}
        >All Songs</option>
        <option
          value='https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json'
        >Rock</option>
        <option
          value='https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json'
        >Dance</option>
        <option
          value='https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json'
        >Country</option>
      </select>
    </div>
    );
  };
};

export default TitleBar;
