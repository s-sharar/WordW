import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess }) {
  return (
  <p className="guess">
    {range(5).map((index) => {
      let addedClass;
      if (guess && guess[index]) {
        addedClass = guess[index].status;
      }
      return <span key={index} className={addedClass ? `cell ${addedClass}`: 'cell'}>{guess ? guess[index].letter : undefined}</span>
    })}
</p>)
}

export default Guess;
