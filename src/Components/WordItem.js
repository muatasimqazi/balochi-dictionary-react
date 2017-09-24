import React, { Component } from 'react';

class WordItem extends Component {

  render() {

    return (
      <li className="Words">
          <strong>{this.props.word.title}</strong> - {this.props.word.category}
      </li>

    );
  }
}

export default WordItem;
