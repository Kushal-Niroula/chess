

function checkPromotion(piece,x,y){
    if(piece.key == 'wP'){
      if(y == 0){
        pieces[piece.key].splice(piece.index,1);
        pieces['wQ'].push({img:w1Q , pos:{x:x , y:y}})
      }
    }
    if(piece.key == 'bP'){
      if(y == 7){
        pieces[piece.key].splice(piece.index,1);
        pieces['bQ'].push({img:b1Q , pos:{x:x , y:y}});
      }
    }}


    function kingMoveValid(key,x,y){
      if( x == selectSquare[0].x +1 || x == selectSquare[0].x-1 ){
        if(y== selectSquare[0].y || y == selectSquare[0].y +1 || y == selectSquare[0].y -1){
          return true;
        }
      }
      else if( x == selectSquare[0].x){
        if(y == selectSquare[0].y +1 || y == selectSquare[0].y -1){
          return true;
        }
      }
      else{
        return false;
      }
    }


function rookMoveValid(key,x,y){

  if(x == selectSquare[0].x){
    let ydiff = y - selectSquare[0].y;
    let i =  ydiff/Math.abs(ydiff);
    while(i != ydiff){
      if(matrix[x][selectSquare[0].y +i] !=0){
        return false;
      }
      i = i + ydiff / Math.abs(ydiff);
    }
  }
  if(y == selectSquare[0].y){
    let xdiff = x - selectSquare[0].x;
    let j = xdiff/Math.abs(xdiff);
    while(j != xdiff){
      if(matrix[selectSquare[0].x + j][y]!=0){
        return false;
      }
      j =  j + xdiff / Math.abs(xdiff);
    }

  }
  if(x == selectSquare[0].x && y ==  selectSquare[0].y){
    return false;
  }
if(x == selectSquare[0].x || y == selectSquare[0].y){
  return true;
}
  return false;
}


function bishopMoveValid(key,x,y){
  if(x == selectSquare[0].x || y == selectSquare[0].y){
    return false;
  }
  if(Math.abs(x-selectSquare[0].x) != Math.abs(y-selectSquare[0].y)){
    return false;
  }
  xdiff = x - selectSquare[0].x;
  ydiff = y - selectSquare[0].y;
  let i = xdiff / Math.abs(xdiff);
  let j = ydiff/ Math.abs(ydiff);
  while( Math.abs(i) != Math.abs(xdiff)){
    if(matrix[selectSquare[0].x + i][selectSquare[0].y + j]!=0){

      return false;
    }
    i = i + (xdiff/Math.abs(xdiff));
    j = j + (ydiff/Math.abs(ydiff));

  }
  return true;
}

function knightMoveValid(key,x,y){
  if((x == selectSquare[0].x + 2) || x == selectSquare[0].x - 2){
    if((y == selectSquare[0].y + 1) || y == selectSquare[0].y -1){
      return true;
    }
    }
    if((y == selectSquare[0].y +2 )|| y == selectSquare[0].y - 2){
      if(x == selectSquare[0].x + 1 || x == selectSquare[0].x -1){
        return true;
      }
    }
    return false;
}
