
/* check if pawn moves to 8th or 1st rank */
function checkPromotion(pieces){
  updateMatrix(pieces);
    for(let i = 0 ;i<pieces['wP'].length;i++){
      if(pieces['wP'][i].pos.y == 0 && color == 'w'){
          pieces['wQ'].push({img:wQ1 , pos:{x:pieces['wP'][i].pos.x , y:0}})
        pieces['wP'].splice(i,1);

      }
      else if(pieces['wP'][i].pos.y == 0 && color == 'b'){
          pieces['wQ'].push({img:bQ1 , pos:{x:pieces['wP'][i].pos.x , y:0}})
        pieces['wP'].splice(i,1);

      }

    }
    for(let i = 0;i<pieces['bP'].length ; i++){
      if(pieces['bP'][i].pos.y == 7 && color == 'w'){
        pieces['bQ'].push({img:bQ1 , pos:{x:pieces['bP'][i].pos.x , y:7}});
        pieces['bP'].splice(i,1);

      }
      else if(pieces['bP'][i].pos.y == 7 && color == 'b'){
        pieces['bQ'].push({img:wQ1 , pos:{x:pieces['bP'][i].pos.x , y:7}});
        pieces['bP'].splice(i,1);

      }
    }}


    /* checks if king move is valid called by moveGenerator function */
    /* parameters: selectSquare=array(selected square) , (x,y):numbers (coordinate to be validated) */
    function kingMoveValid(selectSquare,x,y){
      if( x == selectSquare[0].x +1 || x == selectSquare[0].x-1 ){
        if(y== selectSquare[0].y || y == selectSquare[0].y +1 || y == selectSquare[0].y -1){
          return true;
        }
      }
       if( x == selectSquare[0].x){
        if(y == selectSquare[0].y +1 || y == selectSquare[0].y -1){
          return true;
        }
      }


      return false;
    }

    /* checks if rook move is valid called by moveGenerator function */
    /* parameters: selectSquare=array(selected square) , (x,y):numbers (coordinate to be validated) */
function rookMoveValid(selectSquare,x,y){
  if(x == selectSquare[0].x && y != selectSquare[0].y){
    if(y > selectSquare[0].y){
      for (let i = selectSquare[0].y ; i<y;i++){
        if(i != y && i!= selectSquare[0].y && matrix[x][i] != 0){
          return false;
        }
      }
    return true;
    }
    if(y< selectSquare[0].y){
      for(let i = selectSquare[0].y; i>=y;i--){

        if( i!= y && i != selectSquare[0].y && matrix[x][i] != 0){

          return false;
        }
      }
      return true;
    }
  }
  if(y == selectSquare[0].y && x!= selectSquare[0].x){
    if(x > selectSquare[0].x){
      for (let i = selectSquare[0].x ; i<=x;i++){
        if( i != x && i != selectSquare[0].x && matrix[i][y] != 0){
          return false;
        }
      }
    return true;
    }
    if(x< selectSquare[0].x){
      for(let i = selectSquare[0].x; i>x;i--){
        if(i !=x && i!= selectSquare[0].x && matrix[i][y] != 0){
          return false;
        }
      }
      return true
    }


  }
}

/* checks if bishop move is valid called by moveGenerator function */
/* parameters: selectSquare=array(selected square) , (x,y):numbers (coordinate to be validated) */
function bishopMoveValid(selectSquare,x,y){
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


/* checks if knight move is valid called by moveGenerator function */
/* parameters: selectSquare=array(selected square) , (x,y):numbers (coordinate to be validated) */
function knightMoveValid(selectSquare,x,y){
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


/* checks if pawn move is valid called by moveGenerator function */
/* parameters: selectSquare=array(selected square) , (x,y):numbers (coordinate to be validated) */
function pawnMoveValid(selectSquare,key,x,y){
  if(x >=0 && x<=7 && y>=0 && y<=7){
  if(x== selectSquare[0].x){
      if(key[0]=='w'){
        if(y == selectSquare[0].y + player && matrix[x][y] == 0){
          return true
        }
      }
      else{
        if(y == selectSquare[0].y - player && matrix[x][y] == 0){
          return true
        }
      }
      }



  if(x == selectSquare[0].x + 1 || x == selectSquare[0].x -1){
    if(y == selectSquare[0] . y + player && key[0] == 'w'){
      if(matrix[x][y][0] == 'b'){
        return true;
      }
    }
    if(y == selectSquare[0].y - player && key[0] == 'b'){
      if(matrix[x][y][0] == 'w'){
        return true;
      }
    }
  }
  if( y == selectSquare[0].y + 2*player && selectSquare[0].y == 6 && key[0] == 'w' && x == selectSquare[0].x){
    if(matrix[x][y - player] == 0 && matrix[x][y] == 0){
    return true;
  }
  }
  if( y == selectSquare[0].y - 2*player && selectSquare[0].y == 1 && key[0] == 'b' && x == selectSquare[0].x){
    if(matrix[x][y + player] == 0 && matrix[x][y] == 0){
    return true;
  }

}
return false;
}
return false;
}
