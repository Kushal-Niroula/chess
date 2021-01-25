
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
        flag = key[0];
        return;

      }
    });}

}}

  else{
      move(x,y,selectedPiece);

      selected = false;
      selectSquare = [];
      update();

  }}



function move(x,y,piece){
  for(const key in pieces){
    pieces[key].forEach((item, i) => {
      if(item.pos.x ==x && item.pos.y == y){
        isCapture = key[0] == flag ? false:true
        if(!isCapture){
          selected = false;
          selectSquare = [];
          return 0;
        }
        if(moveValidator(piece.key , x,y,isCapture)){
        pieces[key].splice(i,1);
        update();


      }


    }});

    }
    if(selected == true && moveValidator(piece.key , x,y,isCapture)){


    pieces[piece.key][piece.index].pos.x = x;
    pieces[piece.key][piece.index].pos.y = y;
    checkPromotion(piece,x,y);
    turn = turn == 'w'? 'b':'w';
    isCapture = false;
    updateMatrix();
    update();
  }
  else{
    isCapture = false;
    update();
    return 0 ;
  }

  }




  function moveValidator(key,x,y,isCapture){
    switch(key){
      case('wP'):
        if(selectSquare[0].y == 6 && !isCapture){
          if((y == selectSquare[0].y + player || y == selectSquare[0].y + 2 * player) && x == selectSquare[0].x ){
            return true;
          }
          else{
            return false;
          }
        }
        else if(selectSquare[0].y < 6 && !isCapture  ) {
          if(y == selectSquare[0].y + player && x == selectSquare[0].x){
            return true;
          }

          else {
            return false;
          }
        }
        else{
          if(selectSquare[0].y <=6){
            if(y == selectSquare[0].y + player && (x == selectSquare[0].x + player || x == selectSquare[0].x - player)){
              return true;
            }
          }
        }

        return false;
        break;

        case('bP'):
        if(selectSquare[0].y == 1 && !isCapture){
          if((y == selectSquare[0].y - player || y == selectSquare[0].y - 2 * player) && x == selectSquare[0].x ){
            return true;
          }
          else{
            return false;
          }
        }
        else if(selectSquare[0].y>1 && !isCapture){
          if(y == selectSquare[0].y - player && x == selectSquare[0].x){
            return true;
          }

          else {
            return false;
          }
        }
        else{
          if(selectSquare[0].y >=1){
            if(y == selectSquare[0].y - player && (x == selectSquare[0].x + player || x == selectSquare[0].x - player)){
              return true;
            }
          }
        }
        break;

      case('bK'):
         return kingMoveValid(key,x,y);
        break;
      case ('wK'):
          return kingMoveValid(key,x,y);
          break;
      case ('wR'):
          return rookMoveValid(key,x,y);
          break;
      case('bR'):
          return rookMoveValid(key,x,y);
          break;
      case ('bB'):
          return bishopMoveValid(key,x,y);
          break;
      case ('wB'):
          return bishopMoveValid(key,x,y);
          break;
      case ('bN'):
            return knightMoveValid(key,x,y);
            break;
      case ('wN'):
            return knightMoveValid(key,x,y);
            break;
      case ('wQ'):
            return(rookMoveValid(key,x,y) ||bishopMoveValid(key,x,y));
            break;
      case ('bQ'):
            return(rookMoveValid(key,x,y) ||bishopMoveValid(key,x,y));
            break;

      default:
        return false;
      }
    }
