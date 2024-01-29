const getUsersChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Incorrect input');
      return; // Returning undefined if input is incorrect
    }
  };
  
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
  
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else if (randomNumber === 2) {
      return 'scissors';
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
      return 'User won - The bomb code worked!';
    } else if (userChoice === computerChoice) {
      return 'Tie';
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'User won';
    } else {
      return 'Computer won';
    }
  }
  
  function playGame() {
    const userChoice = getUsersChoice('bomb'); // Pass user input here
    const computerChoice = getComputerChoice();
    console.log('User choice:', userChoice);
    console.log('Computer choice:', computerChoice);
    console.log('Result:', determineWinner(userChoice, computerChoice));
  }
  
  playGame();

  
  