import React from 'react';

export default class Button extends React.Component {
  handleClick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onload = e => console.log(JSON.parse(xhr.response));
    xhr.open('GET', 'api://foo/bar');
    xhr.send();
  }

  render() {
    return (
      <button onClick={this.handleClick}>SEND</button>
    );
  }
}
