import React, { Component } from 'react';
import './App.css'

class Game extends Component {
  state = {
    playerChoice: '',
    computerChoice: '',
    result: '',
  };

  // Function to randomly choose the computer's move
  computerMove = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  // Function to determine the winner
  determineWinner = () => {
    const { playerChoice, computerChoice } = this.state;

    if (playerChoice === computerChoice) {
      return 'Tie';
    }

    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
      return 'You Win';
    } else {
      return 'Computer Wins';
    }
  };

  // Function to handle player choice
  handlePlayerChoice = (choice) => {
    const computerChoice = this.computerMove();
    const result = this.determineWinner();

    this.setState({
      playerChoice: choice,
      computerChoice: computerChoice,
      result: result,
    });
  };

  render() {
    const { playerChoice, computerChoice, result } = this.state;

    return (
      <div>
        <h1>Rock Paper Scissors</h1>
        <p>Choose your move:</p>
        <button onClick={() => this.handlePlayerChoice('rock')}>Rock</button>
        <button onClick={() => this.handlePlayerChoice('paper')}>Paper</button>
        <button onClick={() => this.handlePlayerChoice('scissors')}>
          Scissors
        </button>

        <h2>You chose: {playerChoice}</h2>
        <h2>Computer chose: {computerChoice}</h2>
        <h2>{result}</h2>
      </div>
    );
  }
}

export default Game;