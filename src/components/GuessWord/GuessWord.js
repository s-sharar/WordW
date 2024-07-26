import React from 'react';

function GuessWord({ guesses, setGuesses, answer, gameStatus, setGameStatus, visi, difficulty }) {
  const [input, setInput] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    const nextGuesses = [...guesses, input];
    setInput('');
    setGuesses(nextGuesses);
    if (input === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= difficulty) {
      setGameStatus('lost');
    }
  }
  return <form style={visi}
    className="guess-input-wrapper" 
    onSubmit= {handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
    required
    disabled={gameStatus !== 'running'}
    value={input} 
    id="guess-input" 
    type="text"
    pattern="[A-Za-z]{5}" 
    title="Please enter exactly 5 letters." 
    maxLength={5}
    onChange={(event) => {
      event.target.value = event.target.value.replace(/[^A-Za-z]/g, '');
      setInput(event.target.value.toUpperCase());
    }}/>
  </form>
}

export default GuessWord;
