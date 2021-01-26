
function check(){
  isCheck = 0;

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
