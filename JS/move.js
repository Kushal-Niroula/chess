
function select(x,y){
  if(selected == false){
  for(const key in pieces){
    if(key[0]==turn){
    pieces[key].forEach((item, i) => {
      if(item.pos.x == x && item.pos.y ==y){
        selectSquare[0]={x:x , y:y};
        selectedPiece = {
          key:key,
          index:i
        };

        if(key == 'wP' || key == 'bP'){
          dots = generatePawnMove(key,x,y);
        }
        if(key == 'wB' || key == 'bB'){
          dots = generateBishopMove(key,x,y);
        }
        if(key == 'wK' || key == 'bK'){
          dots = generateKingMove(key,x,y);
        }
        if(key == 'wR' || key =='bR'){
          dots = generateRookMove(key,x,y);
        }
        if(key == 'wN' || key == 'bN'){
          dots = generateKnightMove(key,x,y);
        }
        if(key == 'wQ' || key == 'bQ'){
          dots = generateQueenMove(key,x,y);

        }


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

  let tempCap =0;
  let validated = false;
  updateMatrix(pieces);
  moveGenerator(pieces);
  let existing = matrix[x][y];

  for(let i = 0; i<whiteMoves.length;i++){
    if(x == whiteMoves[i].x && y == whiteMoves[i].y && whiteMoves[i].piece.slice(0,2) == flag ){

      if(parseInt(whiteMoves[i].piece[2]) == selectSquare[0].x && parseInt(whiteMoves[i].piece[3]) == selectSquare[0].y)
      {
      validated = true;
    }
  }
  }


    if (validated){

    if(existing !=0 && existing[0] == flag[0] ){

      return 0;
    }
    if(existing != 0 && existing[0] != flag[0]){
      for(let i= 0 ; i<pieces[existing].length ; i++){
        if(pieces[existing][i].pos.x == x && pieces[existing][i].pos.y == y){
          tempCap = i;
          pieces[existing].splice(i,1);

        }
      }
    }




    pieces[piece.key][piece.index].pos.x = x;
    pieces[piece.key][piece.index].pos.y = y;

    moveCount ++;


    if(moveCount % 2 == 0){
      turn = 'b';
    }
    else{
      turn = 'w';
    }
    updateMatrix(pieces);
    moveGenerator(pieces);
    check(pieces);



    if(isCheck == 'w'){
      pieces[piece.key][piece.index].pos.x = selectSquare[0].x;
      pieces[piece.key][piece.index].pos.y = selectSquare[0].y;
      if(tempCap !=0){
        let isrc = existing + '1';
        pieces[existing].push({img:eval(isrc),pos:{x:x,y:y}});
      }


      moveCount--;
    }
    if(isCheck != 'w' && (piece.key =='wK'|| piece.key == 'bK') && (x == selectSquare[0].x+2 || x == selectSquare[0].x -2) ){
      castleFunction(x,y,piece);
    }
    if(isCheck != 'w' && (piece.key == 'wK' || piece.key == 'bK')){
      pieces[piece.key][piece.index].move = 1

    }
    if(isCheck != 'w' && (piece.key == 'wR' || piece.key == 'bR')){
      pieces[piece.key][piece.index].move = 1

    }



    checkPromotion(pieces);
    updateMatrix(pieces);
    moveGenerator(pieces);
    check(pieces);
    update();


    }
    if(moveCount % 2 == 0){
      turn = 'b';
    }
    else{
      turn = 'w';
    }

    if(turn == 'b'){
      aiMoves();
    }




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
