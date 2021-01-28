function moveGenerator(){
  whiteMoves = [];
  blackMoves = [];
  for(const key in pieces){
    for (let i =0 ;i<pieces[key].length ;i++){
      if(key == 'wP' || key == 'bP'){
        generatePawnMove(key,pieces[key][i].pos.x , pieces[key][i].pos.y);
        }
        if(key == 'wB' || key == 'bB'){
          generateBishopMove(key,pieces[key][i].pos.x , pieces[key][i].pos.y);
        }
        if(key == 'wR' || key == 'bR'){
          generateRookMove(key,pieces[key][i].pos.x , pieces[key][i].pos.y);
        }
        if(key == 'wN' || key == 'bN'){
          generateKnightMove(key,pieces[key][i].pos.x , pieces[key][i].pos.y);
        }
        if(key == 'wQ' || key == 'bQ'){
         generateQueenMove(key,pieces[key][i].pos.x , pieces[key][i].pos.y);
        }
        if(key == 'wK' || key == "bK"){
          generateKingMove(key,pieces[key][i].pos.x , pieces[key][i].pos.y)
        }
    }
  }
}



function generatePawnMove(key,x,y){


  for(let k = x-1 ; k < x + 2; k++){
    for(let l = y-2;l<=y+2;l++){
      if(k>=0 && k<= 7 && l<=7 && l>=0){
      if(pawnMoveValid([{x:x,y:y}],key,k,l)){
        if(key[0] == 'w'){
          whiteMoves.push({x:k,y:l,piece:key + x + y});

        }
        if(key[0] == 'b'){
          blackMoves.push({x:k ,y:l,piece: key + x + y});

        }
      }
    }
  }

  }
}


function generateBishopMove(key,x,y){
  for (let i = 0 ; i<=7 ; i++){
    for(let j = 0;j<=7;j++){

      if(bishopMoveValid([{x:x,y:y}],i,j)){
        if(key[0] == 'w'){
          whiteMoves.push({x:i , y:j,piece:key + x + y})
        }
        if(key[0] == 'b'){
          blackMoves.push({x:i , y:j ,piece: key + x +y })
        }
      }
    }
  }
  }

function generateRookMove(key,x,y){
  for(let i = 0 ;i<=7 ; i++){
    for(let j = 0; j<=7;j++){
      if(rookMoveValid([{x:x,y:y}],i,j)){
        if(key[0]=='w'){
          whiteMoves.push({x:i,y:j,piece: key + x + y })
        }
        if(key[0] == 'b'){
          blackMoves.push({x:i,y:j,piece: key + x + y})
        }
      }
    }
  }
}

function generateKnightMove(key,x,y){
for(let i = x-2 ;i<= x+2;i++){
  for(let j= y-2 ; j<=y+2 ; j++){
    if(i<=7 && i>=0 && j<=7 && j>=0 && Math.abs(i) != Math.abs(j)){
      if(knightMoveValid([{x:x,y:y}],i,j)){
        if(key[0]=='w'){
          whiteMoves.push({x:i,y:j,piece: key + x + y});
        }
        if(key[0]=='b'){
          blackMoves.push({x:i,y:j,piece: key + x + y});
        }
      }
    }
  }
}
}

function generateQueenMove(key,x,y){
  for (let i = 0 ; i<=7 ; i++){
    for(let j = 0;j<=7;j++){

      if(bishopMoveValid([{x:x,y:y}],i,j)){
        if(key[0] == 'w'){
          whiteMoves.push({x:i , y:j,piece:key + x + y})
        }
        if(key[0] == 'b'){
          blackMoves.push({x:i , y:j ,piece: key + x +y })
        }
      }
    }
  }
  for(let i = 0 ;i<=7 ; i++){
    for(let j = 0; j<=7;j++){
      if(rookMoveValid([{x:x,y:y}],i,j)){
        if(key[0]=='w'){
          whiteMoves.push({x:i,y:j,piece: key + x + y })
        }
        if(key[0] == 'b'){
          blackMoves.push({x:i,y:j,piece: key + x + y})
        }
      }
    }
  }
}


function generateKingMove(key,x,y){
  for (let i = -1 ; i<=1 ; i++){
    for (let j = -1; j<=1;j++){
      if((x+i)<=7 && (x+1)>=0 && (y+j)<=7 && (y+j>=0)){
        if(kingMoveValid([{x:x,y:y}],x+i,y+j)){
          if(key[0] == 'w'){
            whiteMoves.push({x:x+i,y:y+j,piece:key+x+y})
          }
          if(key[0]=='b'){
            blackMoves.push({x:x+i,y:y+j,piece:key+x+y})
          }
        }
      }
    }
  }
}
