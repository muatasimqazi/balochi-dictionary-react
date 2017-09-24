import React, { Component } from 'react';
import WordItem from './WordItem';
class Words extends Component {
  render() {
    let wordItems;
    if(this.props.words) {
      wordItems = this.props.words.map(word => {
        // console.log(word);
        return (
          <WordItem key={word.title} word={word} />
        );
      });
    }
    return (
      <div className="Words">
            Balochi Words
            {wordItems}
      </div>
    );
  }
}

export default Words;
