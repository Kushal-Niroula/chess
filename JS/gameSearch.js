function gameSearch(pos,turn){
  let obj ={}
  let randomObj ={}

  let validated =1;
  let max = {};
  let pieceKey;
  let indexPiece;
  let maxValue;
  if(turn == 'b'){
    maxValue = -10000;
  }
  else{
    maxValue = 10000;
  }


  for(let i = 0 ; i < blackMoves.length ; i++ ){
  position = JSON.parse(JSON.stringify(pos))
  updateMatrix(position);
  moveGenerator(position);
  check(position);

    if(turn == 'b'){
      obj = blackMoves[i];
    }
    objx = parseInt(obj.piece[obj.piece.length-2]);
    objy = parseInt(obj.piece[obj.piece.length-1]);

    for (const key in position){
      position[key].forEach((item, i) => {
        if(item.pos.x == objx && item.pos.y ==objy){
          selectSquare[0]={x:objx , y:objy};
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

      continue;

    }

    if(matrix[obj.x][obj.y][0] != selectedPiece.key[0]){
      let ik= matrix[obj.x][obj.y];
      let temp = position[matrix[obj.x][obj.y]];
      for (let i = 0; i<temp.length ; i++){
        if(temp.length >0 && temp[i]){

        if(temp[i].pos.x == obj.x && temp[i].pos.y == obj.y){
          temp.splice(i,1);
          position[selectedPiece.key][selectedPiece.index].pos.x = obj.x;
          position[selectedPiece.key][selectedPiece.index].pos.y = obj.y;




        }
      }}
      }
      updateMatrix(position);
      moveGenerator(position);
      check(position);

      if(isCheck){
        continue;
      }
    }




  else{
    position[selectedPiece.key][selectedPiece.index].pos.x = obj.x;
    position[selectedPiece.key][selectedPiece.index].pos.y = obj.y;

    updateMatrix(position);
    moveGenerator(position);
    check(position);


    if(isCheck == 'b'){
      continue;
}



  }
  updateMatrix(position);
  moveGenerator(position);
  check(position);

  if(turn == 'b'){

    if(evaluatePos() > maxValue){
      max = obj;
      maxValue = evaluatePos();

    }
}
if(turn == 'w'){
  if(evaluatePos()<maxValue){
    maxValue = evaluatePos()
    max = whiteMoves[i];

  }


}
}
  finally{
    continue;
  }



  }


if(maxValue != -10000){
  return max;
}
return 0;



}












 function evaluatePos(){
  let max = 0;
  let min = 0;

  for(let l = 0 ; l <=7 ; l++){
    for(let m = 0 ; m <= 7 ; m++){
      if(matrix[l][m] == 'bP'){
        max = max + value.p;
        max = max + bPMatrix[l][m];
      }
      if(matrix[l][m] == 'wP'){
        min = min + value.p;
        min = min + wPMatrix[l][m]

      }
      if(matrix[l][m] == 'wB'){
        min = min + value.b;
        min = min + wBMatrix[l][m];
      }
      if(matrix[l][m] == 'bB'){
        max = max + value.b;
        max = max + bBMatrix[l][m];
      }
      if(matrix[l][m] == 'wN'){
        min = min + value.n;
        min = min + wNMatrix[l][m];
      }
      if(matrix[l][m] == 'bN'){
        max = max + value.n;
        max = max + bNMatrix[l][m];

      }
      if(matrix[l][m] == 'wR'){
        min = min + value.r;
        min = min + wRMatrix[l][m];
      }
      if(matrix[l][m] == 'bR'){
        max = max + value.r;
        max = max + bRMatrix[l][m];
      }
      if(matrix[l][m] == 'wQ'){
        min = min + value.q;
        min = min + wQMatrix[l][m];
      }
      if(matrix[l][m] == 'bQ'){
        max = max + value.q;
        max = max +bQMatrix[l][m];
      }
    }
  }

  return (max - min);
}
