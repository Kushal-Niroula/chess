function aiMoves(){
  let loop = true;



  while(loop == true){
  updateMatrix();
  moveGenerator();


  let i = Math.floor(Math.random()*blackMoves.length)
  let obj = blackMoves[i];
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

if(matrix[obj.x][obj.y] != 0){
  if(matrix[obj.x][obj.y][0] == selectedPiece.key[0]){

    loop = true;

  }
  else{
    let temp = pieces[matrix[obj.x][obj.y]];
    for (let i = 0; i<temp.length ; i++){
      if(temp.length >0 && temp[i]){

      if(temp[i].pos.x == obj.x && temp[i].pos.y == obj.y){
        let add = temp.splice(i,1);
        pieces[selectedPiece.key][selectedPiece.index].pos.x = obj.x;
        pieces[selectedPiece.key][selectedPiece.index].pos.y = obj.y;
        loop = false;
        moveCount++;
        updateMatrix();
        moveGenerator();
        check();
        if(isCheck == 'b'){
          temp.push(add);
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
}

}


selectSquare = [];
selected = false;
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
