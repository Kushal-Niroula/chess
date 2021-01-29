function aiMoves(){
  let loop = true;
let iterator = 0;
let obj = {}

  while(loop == true){

  updateMatrix();
  moveGenerator();
  check();



if(isCheck != 'b'){
  iterator = Math.floor(Math.random()*blackMoves.length)
}
if(isCheck == 'b'){
  if(iterator >=blackMoves.length-1){
    window.alert('i lost');
    return(0);
  }
  iterator ++;
}

  obj = blackMoves[iterator];
  objx = parseInt(obj.piece[obj.piece.length-2]);
  objy = parseInt(obj.piece[obj.piece.length-1]);

  for (const key in pieces){
    pieces[key].forEach((item, i) => {
      if(item.pos.x == objx && item.pos.y ==objy){
        selectSquare.push({x:objx , y:objy});
        selectedPiece = {
          key:key,
          index:i
        };



      }
    });
}
try{
if(matrix[obj.x][obj.y] != 0){
  if(matrix[obj.x][obj.y][0] == selectedPiece.key[0]){

    loop = true;
    continue;

  }
  if(matrix[obj.x][obj.y][0] != selectedPiece.key[0]){
    let ik= matrix[obj.x][obj.y];
    let temp = pieces[matrix[obj.x][obj.y]];
    for (let i = 0; i<temp.length ; i++){
      if(temp.length >0 && temp[i]){

      if(temp[i].pos.x == obj.x && temp[i].pos.y == obj.y){
        temp.splice(i,1);
        pieces[selectedPiece.key][selectedPiece.index].pos.x = obj.x;
        pieces[selectedPiece.key][selectedPiece.index].pos.y = obj.y;
        loop = false;
        moveCount++;
        updateMatrix();
        moveGenerator();
        check();
        if(isCheck == 'b'){
          pieces[ik].push({img:eval(ik + 1),pos:{x:obj.x,y:obj.y}});
          pieces[selectedPiece.key][selectedPiece.index].pos.x = objx;
          pieces[selectedPiece.key][selectedPiece.index].pos.y = objy;
          moveCount = moveCount -1;
          loop = true;

        }
      }
    }}
    }
  }


else{
  pieces[selectedPiece.key][selectedPiece.index].pos.x = obj.x;
  pieces[selectedPiece.key][selectedPiece.index].pos.y = obj.y;
  loop = false;
  moveCount++;
  updateMatrix();
  moveGenerator();

  check();
  if(isCheck == 'b'){
    pieces[selectedPiece.key][selectedPiece.index].pos.x = objx;
    pieces[selectedPiece.key][selectedPiece.index].pos.y = objy;
    moveCount = moveCount -1;
    loop = true;

  }

  if(isCheck != 'b' && (piece.key =='wK'|| piece.key == 'bK') && (x == selectSquare[0].x+2 || x == selectSquare[0].x -2) ){
    castleFunction(x,y,piece);
  }
  if(isCheck != 'b' && (piece.key == 'wK' || piece.key == 'bK')){
    pieces[piece.key][piece.index].move = 1

  }
  if(isCheck != 'b' && (piece.key == 'wR' || piece.key == 'bR')){
    pieces[piece.key][piece.index].move = 1

  }
}

}
finally{
  continue;
}
}


selectSquare = [];
selected = false;
checkPromotion();
updateMatrix();
update();

if(moveCount % 2 == 0){
  turn = 'b'
}
else{
  turn = 'w'
}

if(turn == 'b'){
  aiMoves();
}
}
