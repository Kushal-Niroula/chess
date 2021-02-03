/* checks if the position is in check */
function check(pieces){
  try{

  if(isCheck == 'w' || isCheck == 0){
  let wx = pieces['wK'][0].pos.x;
  let wy = pieces['wK'][0].pos.y;

  for( let l = 0 ; l<blackMoves.length ; l++){
    if (wx == blackMoves[l].x && wy == blackMoves[l].y){

      isCheck = 'w';
      return 0;

    }

  }

  let bx = pieces.bK[0].pos.x;
  let by = pieces.bK[0].pos.y;



  for(let k = 0;k<whiteMoves.length ; k++){

    if (bx == whiteMoves[k].x && by == whiteMoves[k].y){
      isCheck = 'b';
      return 0;

    }

  }
}

if(isCheck == 'b'){

    let bx = pieces.bK[0].pos.x;
    let by = pieces.bK[0].pos.y;



    for(let k = 0;k<whiteMoves.length ; k++){

      if (bx == whiteMoves[k].x && by == whiteMoves[k].y){
        isCheck = 'b';
        return 0;

      }

    }


    if(isCheck == 'w'){
      let wx = pieces['wK'][0].pos.x;
      let wy = pieces['wK'][0].pos.y;

      for( let l = 0 ; l<blackMoves.length ; l++){
        if (wx == blackMoves[l].x && wy == blackMoves[l].y){

          isCheck = 'w';
          return 0;

        }

      }
}


}
isCheck = 0;
}
finally{
  return 0;
}
}


/* invoked when game is over */
/* parameter : isCheck= string(which side is checkmated) */
  function gameOverFunction(isCheck){
    contd.style.display="none"
    result.style.display = "block";
    gameMenu.style.display = "block";
    canvas.style.opacity = "50%";
    startGame = false;
    arrow=[];

    if(isCheck == 'w'){
        if(color == 'w'){

          result.innerHTML = "Black won"
          }
          if(color == 'b'){
            result.innerHTML = "White won";
          }
  }
  else{
    if(color == 'w'){
      result.innerHTML = "White won";
    }
    else{
      result.innerHTML = "black Won";
    }
  }
}
