/**
* @param {pieces} object
* checks if the position is in check
*/
function check(pieces,turn) {
  try {
    if (isCheck == "w" || (isCheck == 0 && turn == "w")) {
      let wx = pieces["wK"][0].pos.x;
      let wy = pieces["wK"][0].pos.y;

      for (let l = 0; l < blackMoves.length; l++) {
        if (wx == blackMoves[l].x && wy == blackMoves[l].y) {
          isCheck = "w";
          return 0;
        }
      }

      let bx = pieces.bK[0].pos.x;
      let by = pieces.bK[0].pos.y;

      for (let k = 0; k < whiteMoves.length; k++) {
        if (bx == whiteMoves[k].x && by == whiteMoves[k].y) {
          isCheck = "b";
          return 0;
        }
      }
    }

    if (isCheck == "b" || (isCheck == 0 && turn == "b")) {
      let bx = pieces.bK[0].pos.x;
      let by = pieces.bK[0].pos.y;

      for (let k = 0; k < whiteMoves.length; k++) {
        if (bx == whiteMoves[k].x && by == whiteMoves[k].y) {
          isCheck = "b";
          return 0;
        }
      }
        let wx = pieces["wK"][0].pos.x;
        let wy = pieces["wK"][0].pos.y;

        for (let l = 0; l < blackMoves.length; l++) {
          if (wx == blackMoves[l].x && wy == blackMoves[l].y) {
            isCheck = "w";
            return 0;
          }
        }

    }
    isCheck = 0;
  } finally {
    return 0;
  }
}

/* invoked when game is over */
/* parameter : isCheck= string(which side is checkmated) */
function gameOverFunction(isCheck) {
  contd.style.display = "none";
  result.style.display = "block";
  gameMenu.style.display = "block";
  canvas.style.opacity = "50%";
  startGame = false;
  arrow = [];

  if (isCheck == "w") {
    if (color == "w") {
      result.innerHTML = "Black won";
    }
    if (color == "b") {
      result.innerHTML = "White won";
    }
  } else if(isCheck =='b') {
    if (color == "w") {
      result.innerHTML = "White won";
    } else {
      result.innerHTML = "black Won";
    }
  }
}


/* castle fucntion implementation*/
/* parameters : key= string(wK or bK) , x,y=number(coordinate), selectSquare = object */
function castle(key, x, y, selectSquare) {
  let rook;
  let valid = true;
  if(x>4){
    for(let i = 0 ; i<pieces[key[0]+'R'].length ; i++){
      if(pieces[key[0]+'R'][i].pos.x ==7){
        rook = pieces[key[0]+'R'][i]
      }
    }
    if(key[0]=='w'){

        if(selectSquare[0].x == 4 || (selectSquare[0].x == 3)){
          for(let i = 0; i<blackMoves.length; i++){
            if(selectSquare[0].x ==4){

            if((blackMoves[i].x == 5 && blackMoves[i].y ==7) || (blackMoves[i].x == 6 && blackMoves[i].y==7)){

              valid = false;
            }
          }
          else{
            if((blackMoves[i].x == 4 && blackMoves[i].y ==7) || (blackMoves[i].x == 5 && blackMoves[i].y==7)){
              valid = false;
            }
          }
          }
        }
      }

      if(key[0]=='b'){
          if(selectSquare[0].x == 4 || (selectSquare[0].x == 3)){
            for(let i = 0; i<whiteMoves.length; i++){
              if(selectSquare[0].x ==4){
              if((whiteMoves[i].x == 5 && whiteMoves[i].y ==0) || (whiteMoves[i].x == 6 && whiteMoves[i].y==0)){
                valid = false;
              }
            }
            else{
              if((whiteMoves[i].x == 4 && whiteMoves[i].y ==0) || (whiteMoves[i].x == 5 && whiteMoves[i].y==0)){
                valid = false;
              }
            }
            }
          }
        }

      }


  if(x<4){
    for(let i = 0 ; i<pieces[key[0]+'R'].length ; i++){
      if(pieces[key[0]+'R'][i].pos.x ==0){
        rook = pieces[key[0]+'R'][i]
      }
    }
    if(key[0]=='w'){
        if(selectSquare[0].x == 4 || (selectSquare[0].x == 3)){
          for(let i = 0; i<blackMoves.length; i++){
            if(selectSquare[0].x ==4){
            if((blackMoves[i].x == 3 && blackMoves[i].y ==7) || (blackMoves[i].x == 2 && blackMoves[i].y==7)){
              valid = false;
            }
          }
          else{
            if((blackMoves[i].x == 2 && blackMoves[i].y ==7) || (blackMoves[i].x == 1 && blackMoves[i].y==7)){
              valid = false;
            }
          }
          }
        }
      }

      if(key[0]=='b'){
          if(selectSquare[0].x == 4 || (selectSquare[0].x == 3)){
            for(let i = 0; i<whiteMoves.length; i++){
              if(selectSquare[0].x ==4){
              if((whiteMoves[i].x == 3 && whiteMoves[i].y ==0) || (whiteMoves[i].x == 2 && whiteMoves[i].y==0)){
                valid = false;
              }
            }
            else{
              if((whiteMoves[i].x ==2 && whiteMoves[i].y ==0) || (whiteMoves[i].x == 2 && whiteMoves[i].y==0)){
                valid = false;
              }
            }
            }
          }
        }






  }
  if(valid){
  if(rook){
  if (isCheck == 0) {
    if (selectSquare[0].y == 7 || selectSquare[0].y == 0) {
      if (selectSquare[0].x == 3) {
        if (x == 1) {
          if (
            rook.move == false &&
            pieces[key][0].move == false
          ) {
            if (matrix[1][7]==0 && matrix[2][7] == 0 && key[0] == "w") {
              pieces[key][0].pos.x = 1;
              rook.pos.x = 2;
              return true;
            }
            if (matrix[1][0]==0 && matrix[2][0] == 0 && key[0] == "b") {
              pieces[key][0].pos.x = 1;
              rook.pos.x = 2;
              return true;
            }
          }
        }
        if (x == 5) {
          if (pieces[key][0].move == false && rook.move == false) {
            if (
              matrix[4][7] == 0 &&
              matrix[5][7] == 0 &&
              matrix[6][7] == 0 &&
              key[0] == "w"
            ) {
              pieces[key][0].pos.x = 5;
              rook.pos.x = 4;
              return true;
            }

            if (
              matrix[4][0] == 0 &&
              matrix[5][0] == 0 &&
              matrix[6][0] == 0 &&
              key[0] == "b"
            ) {
              pieces[key][0].pos.x = 5;
              rook.pos.x = 4;
              return true;
            }
          }
        }
      }
      if (selectSquare[0].x == 4) {
        if (x == 2) {
          if (
            rook.move == false &&
            pieces[key][0].move == false
          ) {
            if (
              matrix[1][7] == 0 &&
              matrix[2][7] == 0 &&
              matrix[3][7] == 0 &&
              key[0] == "w"
            ) {
              pieces[key][0].pos.x = 2;
              rook.pos.x = 3;
              return true;
            }
            if (
              matrix[1][0] == 0 &&
              matrix[2][0] == 0 &&
              matrix[3][0] == 0 &&
              key[0] == "b"
            ) {
              pieces[key][0].pos.x = 2;
              rook.pos.x = 3;
              return true;
            }
          }
        }
        if (x == 6) {
          if (
            rook.move == false &&
            pieces[key][0].move == false
          ) {
            if (matrix[5][7] == 0 && matrix[6][7] == 0 && key[0] == "w") {
              pieces[key][0].pos.x = 6;
              rook.pos.x = 5;
              return true;
            }
            if (matrix[5][0] == 0 && matrix[6][0] == 0 && key[0] == "b") {
              pieces[key][0].pos.x = 6;
              rook.pos.x = 5;
              return true;
            }
          }
        }
      }
    }
  }
}
}
  return false;
}
