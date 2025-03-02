function playGame(playerInput){
  clearMessages()

  function getMoveName(argMoveId){
    if(argMoveId == 1 ){
    return 'Kamień';
    } 
      else if(argMoveId == 2 ){
      return 'Papier';
      } 
      else if(argMoveId == 3 ){
      return 'Nożyce';
      }
        else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
  }

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if(argComputerMove == argPlayerMove){
    printMessage('Remis!');
    }
      else if( argComputerMove == 'Kamień' && argPlayerMove == 'Papier' || 
              argComputerMove == 'Papier' && argPlayerMove == 'Nożyce' ||
              argComputerMove == 'Nożyce' && argPlayerMove == 'Kamień'){
              printMessage('Ty wygrywasz!');   
      } 
        else {
        printMessage('Tym razem przegrywasz :(');
        }
  }

  //COMPUTER MOVE

  let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);

  //PLAYER MOVE   
    let playerMove = getMoveName(playerInput);
      displayResult(computerMove, playerMove);

}

// URUCHOMIENIE GRY

document.getElementById('play-rock').addEventListener('click', function(){
  playGame('1');
})
document.getElementById('play-paper').addEventListener('click', function(){
  playGame('2');
})
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame('3');
})