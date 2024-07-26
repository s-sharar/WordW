import React from 'react';
import { range } from '../../utils'
import Guess from '../Guess'

function AllGuesses({ validatedGuesses, difficulty }) {
  return (
  <div className="guess-results">
    {range(difficulty).map((index) => {
      return <Guess key={index} guess={validatedGuesses[index]}/>
    })}
  </div>
  )
}

export default AllGuesses;
