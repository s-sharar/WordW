import React from 'react';

function Header({difficulty, setDifficulty, handleRestart}) {
  const handleDifficultyChange = (event) => {
    setDifficulty(event);
    handleRestart();
};
  return (
    <header>
      <div className="side">
        <i className="fa fa-bars fa-2x"></i>
        <div className="nav-text-right">
        <label htmlFor="difficulty-links"><h3>Select difficulty</h3></label>
            <hr />
            <div id="difficulty-links">
                <a
                    href="#"
                    onClick={() => handleDifficultyChange('8')}
                >
                    Easy
                </a>
                <a
                    href="#"
                    onClick={() => handleDifficultyChange('6')}
                >
                    Normal
                </a>
                <a
                    href="#"
                    onClick={() => handleDifficultyChange('4')}
                >
                    Hard
                </a>
            </div>
        </div>
      </div>
      <h1>WordW</h1>
      <div className="side">
        <i className="fa fa-info-circle fa-2x"></i>
        <div className="info-text">
          <h3>How to Play WordW</h3>
          <p>WordW is basically Wordle, but yeah.</p>
          <p>WordW is a word puzzle game where the goal is to guess a hidden five-letter word within six tries.</p>
  
          <h4>Rules:</h4>
          <ol>
            <li><strong>Guess a Word:</strong> Enter any five-letter word and submit.</li>
            <li><strong>Get Feedback:</strong>
            <ul>
              <li><span style={{color: "green"}}>Green:</span> The letter is correct and in the right position.</li>
              <li><span style={{color: "yellow"}}>Yellow:</span> The letter is correct but in the wrong position.</li>
              <li><span style={{color: "gray"}}>Gray:</span> The letter is not in the word.</li>
            </ul>
            </li>
            <li><strong>Refine Your Guesses:</strong> Use the feedback to narrow down the correct word.</li>
            <li><strong>Win by guessing the word within six attempts!</strong></li>
            <li><h4><i className="fa fa-exclamation"></i>&nbsp;Note: To make this a little more interesting, there are a few <br/>difficulty levels on the top-left, be sure to try them out!</h4></li>
          </ol>
        </div>
      </div>
    </header>
  );
}

export default Header;
