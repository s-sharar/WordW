import React from 'react';

import GuessWord from '../GuessWord'
import AllGuesses from '../AllGuesses'
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import { checkGuess } from '../../game-helpers';
import Keyboard from '../Keyboard';


function Game( { answer, setAnswer, gameStatus, setGameStatus, guesses, setGuesses, difficulty, handleRestart } ) {
  console.log(answer);
  console.log(difficulty);
  const validatedGuesses = guesses.map((guess) =>
    checkGuess(guess, answer)
  );
  return <>
    <AllGuesses validatedGuesses={validatedGuesses} difficulty={difficulty}/>
    {gameStatus === 'running' ? <GuessWord guesses={guesses} setGuesses={setGuesses} answer={answer} gameStatus={gameStatus} setGameStatus={setGameStatus} visi={{visibility: 'visible'}} difficulty={difficulty}/> :
    <GuessWord guesses={guesses} setGuesses={setGuesses} answer={answer} gameStatus={gameStatus} setGameStatus={setGameStatus} visi={{visibility: 'hidden'}} difficulty={difficulty}/>}
    {gameStatus === 'running' ? <Keyboard validatedGuesses={validatedGuesses} visi={{display: 'block'}}/> : <Keyboard validatedGuesses={validatedGuesses} visi={{display: 'none'}}/>}
    {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} handleRestart={handleRestart}/>}
    {gameStatus === 'lost' && <LostBanner answer={answer} handleRestart={handleRestart}/>}
  </>;
}

export default Game;
