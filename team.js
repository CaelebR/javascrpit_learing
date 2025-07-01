const team = {
  _players: [
    {firstName: 'Caeleb', lastName:'Renner', age: 20},
    {firstName: 'Pat', lastName:'Surtain', age: 25},
    {firstName: 'Bo', lastName:'Nix', age: 24}],
  _games: [
    {opponent: 'Eagles', teamPoints: 31, opponentPoints: 28},
    {opponent: 'Bills', teamPoints: 21, opponentPoints: 24},
    {opponent: 'Chiefs', teamPoints: 40, opponentPoints: 14}
  ],

  get players(){
      return this._players;
  },

  get games(){
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge){
    if(typeof newFirstName === 'string' &&
     typeof newLastName === 'string' &&
      typeof newAge === 'number'){
        this._players.push({firstName: newFirstName, lastName: newLastName, age: newAge});
      }else{
        console.log('Invalid input');
      }
  },

  addGame(opponent, teamPoints, opponentPoints){
    if (typeof opponent === 'string' && typeof teamPoints === 'number' && typeof opponentPoints === 'number'){
      this._games.push({opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints});
    }else{
      console.log('Invalid input');
    }
  }
}

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98)
console.log(team.players)
console.log(team.games)