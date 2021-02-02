/* generates all possible moves for both sides */
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


/* generates all possible  pawn move */
/* parameters: key=string(key of piece) ,(x,y)=number(coordinate of existing square) */
function generatePawnMove(key,x,y){

let temp =[];
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
        temp.push({x:k ,y:l,piece: key + x + y});
      }
    }
  }

  }
  return temp;

}

/* generates all possible  bishop move */
/* parameters: key=string(key of piece) ,(x,y)=number(coordinate of existing square) */
function generateBishopMove(key,x,y){
  temp = [];
  for (let i = 0 ; i<=7 ; i++){
    for(let j = 0;j<=7;j++){

      if(bishopMoveValid([{x:x,y:y}],i,j)){
        if(key[0] == 'w'){
          whiteMoves.push({x:i , y:j,piece:key + x + y})
        }
        if(key[0] == 'b'){
          blackMoves.push({x:i , y:j ,piece: key + x +y })
        }
        temp.push({x:i , y:j ,piece: key + x +y })
      }
    }
  }
  return temp;
  }


  /* generates all possible  rook move */
  /* parameters: key=string(key of piece) ,(x,y)=number(coordinate of existing square) */
function generateRookMove(key,x,y){
  let temp =[];
  for(let i = 0 ;i<=7 ; i++){
    for(let j = 0; j<=7;j++){
      if(rookMoveValid([{x:x,y:y}],i,j)){
        if(key[0]=='w'){
          whiteMoves.push({x:i,y:j,piece: key + x + y })
        }
        if(key[0] == 'b'){
          blackMoves.push({x:i,y:j,piece: key + x + y})
        }
        temp.push({x:i,y:j,piece:key+x+y});
      }
    }
  }
  return temp;
}


/* generates all possible  knight move */
/* parameters: key=string(key of piece) ,(x,y)=number(coordinate of existing square) */
function generateKnightMove(key,x,y){
  let temp = [];
for(let i = x-2 ;i<= x+2;i++){
  for(let j= y-2 ; j<=y+2 ; j++){
    if(i<=7 && i>=0 && j<=7 && j>=0){
      if(knightMoveValid([{x:x,y:y}],i,j)){
        if(key[0]=='w'){
          whiteMoves.push({x:i,y:j,piece: key + x + y});
        }
        if(key[0]=='b'){
          blackMoves.push({x:i,y:j,piece: key + x + y});
        }
        temp.push({x:i,y:j,piece: key + x + y})
      }
    }
  }
}
return temp;
}


/* generates all possible  queen move */
/* parameters: key=string(key of piece) ,(x,y)=number(coordinate of existing square) */
function generateQueenMove(key,x,y){
  let temp=[];
  for (let i = 0 ; i<=7 ; i++){
    for(let j = 0;j<=7;j++){

      if(bishopMoveValid([{x:x,y:y}],i,j)){
        if(key[0] == 'w'){
          whiteMoves.push({x:i , y:j,piece:key + x + y});

        }
        if(key[0] == 'b'){
          blackMoves.push({x:i , y:j ,piece: key + x +y })
        }
        temp.push({x:i , y:j,piece:key + x + y});
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
        temp.push({x:i,y:j,piece: key + x + y});
      }
    }
  }
  return temp;
}



/* generates all possible  king move */
/* parameters: key=string(key of piece) ,(x,y)=number(coordinate of existing square) */
function generateKingMove(key,x,y){
  let temp=[]
  for (let i = -1 ; i<=1 ; i++){
    for (let j = -1; j<=1;j++){
      if((x+i)<=7 && (x+i)>=0 && (y+j)<=7 && (y+j>=0)){
        if(kingMoveValid([{x:x,y:y}],x+i,y+j)){
          if(key[0] == 'w'){
            whiteMoves.push({x:x+i,y:y+j,piece:key+x+y})
          }
          if(key[0]=='b'){
            blackMoves.push({x:x+i,y:y+j,piece:key+x+y})
          }
          temp.push({x:x+i,y:y+j,piece:key+x+y})
        }
      }
    }
  }
  return temp;
}
