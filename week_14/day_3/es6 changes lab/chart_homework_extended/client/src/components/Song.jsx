// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

import React from 'react';

class Song extends React.Component {
  render() {
  return (
    <div>
      <img
      id={this.props.position}
      className='audio-control'
      src='https://image.freepik.com/free-icon/play-button_318-42541.jpg'
      onClick={this.props.handlePlayPause}
      />
      <img src={this.props.image} />
      <div className='details'>
        <h3>{this.props.position}. {this.props.title}</h3>
        <h4>{this.props.artist}</h4>
      </div>
      <audio id={'audio' + this.props.position} src={this.props.audio}>
      </audio>
    </div>
    );
  };
};

export default Song;
