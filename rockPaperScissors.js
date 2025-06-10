const getUserChoice = userInput => {
    userInput.toLowerCase();
    if (userInput == 'rock' || userInput == 'paper' ||      userInput == 'scissors' || userInput == 'bomb'){
      return userInput; 
    }else{
      console.log('Invalid input')
      return 'Invalid input'
    }
};

//getUserChoice('dock');
//getUserChoice('rock');

function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors'];
  const index = Math.floor(Math.random() * (2 + 1));
  return choices[index];

};

//console.log(getComputerChoice());
//console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice){
  if (userChoice == computerChoice){
    return 'tie';
  }else if(userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper' || userChoice === 'paper' && computerChoice === 'rock'){
    return 'win'
  }else if(userChoice == 'bomb') {
    return 'win'
  }else{
    return 'loss'
  }
};

//console.log(determineWinner('scissors', 'rock'))

function playGame(userChoice = 'scissors', computerChoice = 'rock'){
  userChoice = getUserChoice(userChoice);
  return determineWinner(userChoice, computerChoice);
};

//console.log(playGame('bomb', getComputerChoice()));
