
function select(x,y){
  if(selected == false){
  for(const key in pieces){
    if(key[0]==turn){
    pieces[key].forEach((item, i) => {
      if(item.pos.x == x && item.pos.y ==y){
        selectSquare.push({x:x , y:y});
        selectedPiece = {
          key:key,
          index:i
        };
        update();
        selected = true;
        flag = key;
        return;

      }
    });}

}}

  else{
      move(x,y,selectedPiece,pieces);

      selected = false;
      selectSquare = [];
      update();

  }}



function move(x,y,piece,pieces){
  let counter = 0;
  let tempCap =0;
  if(isCheck == 'w' || isCheck == 'b'){
    counter =  1;


  }
  let existing = matrix[x][y];
  if(moveValidator(piece.key,x,y)){
    if(existing !=0 && existing[0] == flag[0] ){
      return 0;
    }
    if(existing != 0 && existing[0] != flag[0]){
      for(let i= 0 ; i<pieces[existing].length ; i++){
        if(pieces[existing][i].pos.x == x && pieces[existing][i].pos.y == y){
          tempCap = i
          pieces[existing].splice(i,1)

        }
      }
    }


    pieces[piece.key][piece.index].pos.x = x;
    pieces[piece.key][piece.index].pos.y = y;
    updateMatrix();
    moveGenerator();
    check();
    if(isCheck){
      checkGameover();
    }
    if(isCheck && counter == 1){
      pieces[piece.key][piece.index].pos.x = selectSquare[0].x;
      pieces[piece.key][piece.index].pos.y = selectSquare[0].y;
      if(tempCap !=0){
        let isrc = existing + '1';
        pieces[existing].push({img:eval(isrc),pos:{x:x,y:y}});
      }

      turn =  turn == 'w'?'b':'w';
    }

    turn = turn == 'w'?'b':'w';

    if(isCheck != 0 && isCheck != turn){
      pieces[piece.key][piece.index].pos.x = selectSquare[0].x;
      pieces[piece.key][piece.index].pos.y = selectSquare[0].y;
      if(tempCap !=0){
        let isrc = existing + '1';
        pieces[existing].push({img:eval(isrc),pos:{x:x,y:y}});
      }

      turn =  turn == 'w'?'b':'w';

    }
    checkPromotion();
    updateMatrix();
    moveGenerator();
    check();


    }

    update();
  }







  function moveValidator(key,x,y){
    switch(key){
      case('wP'):
        return pawnMoveValid(selectSquare,key,x,y)
        break;

        case('bP'):
        return pawnMoveValid(selectSquare,key,x,y);
        break;

      case('bK'):
         return kingMoveValid(selectSquare,x,y);
        break;
      case ('wK'):
          return kingMoveValid(selectSquare,x,y);
          break;
      case ('wR'):
          return rookMoveValid(selectSquare,x,y);
          break;
      case('bR'):
          return rookMoveValid(selectSquare,x,y);
          break;
      case ('bB'):
          return bishopMoveValid(selectSquare,x,y);
          break;
      case ('wB'):
          return bishopMoveValid(selectSquare,x,y);
          break;
      case ('bN'):
            return knightMoveValid(selectSquare,x,y);
            break;
      case ('wN'):
            return knightMoveValid(selectSquare,x,y);
            break;
      case ('wQ'):
            return(rookMoveValid(selectSquare,x,y) ||bishopMoveValid(selectSquare,x,y));
            break;
      case ('bQ'):
            return(rookMoveValid(selectSquare,x,y) ||bishopMoveValid(selectSquare,x,y));
            break;

      default:
        return false;
      }
    }
