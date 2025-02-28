//COMPUTER MOVE

let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = 'nieznany ruch';

    if(randomNumber == 1){
      computerMove = 'Kamień';
    }
      else if(randomNumber == 2){
        computerMove = 'Papier';
      }
      else if(randomNumber == 3){
        computerMove = 'Nożyce';
      }

        printMessage('Mój ruch to:' + computerMove);

//PLAYER MOVE        

let playerInput = prompt ('Wybierz swoj ruch: 1: Kamień 2: Papier 3: Nożyce.');
  let playerMove = 'Nieznany ruch';
    
    if(playerInput == '1' || playerInput == 'kamien' || playerInput == 'Kamien' || playerInput == 'kamień'){
      playerMove = 'Kamień';
    }
      else if(playerInput == '2' || playerInput == 'papier'){
        playerMove = 'Papier';
      }
      else if(playerInput == '3' || playerInput == 'nozyce' || playerInput == 'Nozyce' || playerInput == 'nożyce'){
        playerMove = 'Nożyce';
      }

        printMessage('Twój ruch to: ' + playerMove);

//COMPUTER WIN
  if(computerMove == 'Papier' && playerMove == 'Kamień'){
  printMessage('Papier nakrywa Kamień  ! PRZEGRYWASZ!');
  }
    else if(computerMove == 'Nożyce' && playerMove == 'Papier'){
    printMessage('Nożyce przecinaja Papier  ! PRZEGRYWASZ!');
    }
    else if(computerMove == 'Kamień' && playerMove == 'Nożyce'){
    printMessage('Kamień tępi Nożyce  ! PRZEGRYWASZ!');
    }

//PLAYER WIN
  if(computerMove == 'Kamień' && playerMove == 'Papier'){
  printMessage('Papier nakrywa Kamień  ! WYGRYWASZ!');
  }
    else if(computerMove == 'Papier' && playerMove == 'Nożyce'){
    printMessage('Nożyce przecinaja Kamień  ! WYGRYWASZ!');
    }
    else if(computerMove == 'Nożyce' && playerMove == 'Kamień'){
    printMessage('Kamień tępi Nożyce  ! WYGRYWASZ!');
    }
  
//DRAW
  if(computerMove == 'Kamień' && playerMove == 'Kamień'){
  printMessage('Kamień i Kamień  ! REMIS!');
  }
    else if(computerMove == 'Papier' && playerMove == 'Papier'){
    printMessage('Papier i Papier  ! REMIS!');
    }
    else if(computerMove == 'Nożyce' && playerMove == 'Nożyce'){
    printMessage('Nożyce i Nożyce  ! REMIS!');
    }

//WRONG COMMAND
  if(playerMove == 'Nieznany ruch'){
    printMessage('Zły wybór. Nie ma takiego ruchu!');
  }

