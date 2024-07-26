import React from 'react'
import Game from '../Game';
import Header from '../Header';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function App() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);
  const [difficulty, setDifficulty] = React.useState(6);
  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus('running');
  }
  return (
    <div className="wrapper">
      <Header difficulty={difficulty} setDifficulty={setDifficulty} handleRestart={handleRestart}/>
      <div className="game-wrapper">
        <Game answer={answer} setAnswer={setAnswer} gameStatus={gameStatus} setGameStatus={setGameStatus} guesses={guesses} setGuesses={setGuesses} difficulty={difficulty} handleRestart={handleRestart}/>
      </div>
    </div>
  );
}

export default App;
