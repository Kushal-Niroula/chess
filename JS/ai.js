/* function to analyze , pick and move pieces from ai side  */
function aiMoves() {
  if (moveCount % 2 == 0) {
    turn = "b";
  } else {
    turn = "w";
  }
  let position = objectClone(pieces);
  let objIndex;
  updateMatrix(pieces);
  moveGenerator(pieces);

  let obj = gameSearch(
    position,
    turn
  ); /* position evaluation and picking best move */
  if (obj == 0) {
  gameOverFunction(isCheck);
  return 0;
  }
  if ((turn == "w") & (mode == 0)) {
    return;
  }
  updateMatrix(pieces);
  moveGenerator(pieces);
  check(pieces,turn);

  let objx = parseInt(obj.piece[obj.piece.length - 2]);
  let objy = parseInt(obj.piece[obj.piece.length - 1]);
  let objKey = obj.piece.slice(0, 2);

  for (let i = 0; i < pieces[objKey].length; i++) {
    if (pieces[objKey][i].pos.x == objx && pieces[objKey][i].pos.y == objy) {
      objIndex = i;
    }
  }

  if (matrix[obj.x][obj.y] != 0) {
    let ik = matrix[obj.x][obj.y];
    let temp = pieces[ik];
    for (let i = 0; i < temp.length; i++) {
      if (temp.length > 0 && temp[i]) {
        if (temp[i].pos.x == obj.x && temp[i].pos.y == obj.y) {
          temp.splice(i, 1);
          pieces[objKey][objIndex].pos.x = obj.x;
          pieces[objKey][objIndex].pos.y = obj.y;
        }
      }
    }
  } else {
    pieces[objKey][objIndex].pos.x = obj.x;
    pieces[objKey][objIndex].pos.y = obj.y;
  }
  moveCount++;
  arrow = [];
  arrow = [objx, objy, obj.x, obj.y];
  selectSquare = [];
  selected = false;
  checkPromotion(pieces);
  updateMatrix(pieces);
  moveGenerator(pieces);
  check(pieces,turn);

  if (moveCount % 2 == 0) {
    turn = "b";
  } else {
    turn = "w";
  }
  sound.play();
  if(isCheck){
    checkSound.play();
  }
  update(pieces);
if(isCheck == turn){
    if(gameOverEvaluation(objectClone(pieces), true)){
      gameOverFunction(isCheck);
    }
}

  if (turn == "b" || mode == "ai") {
    setTimeout(aiMoves, 0);
  }
}



/**
*
* @param {pos} object
* @param {test} boolean
* @return boolean(if checkmate or not)
*evaluates the position and detects if it is checkmate on either side
*/
function gameOverEvaluation(pos, test) {
  updateMatrix(pos);
  moveGenerator(pos);
  let  checkOld = isCheck;
  let counter = isCheck == 'w'?whiteMoves.length-1:blackMoves.length-1;
  let obj = {};
  for (let i = 0; i <= counter; i++) {
    position = objectClone(pos);
    updateMatrix(position);
    moveGenerator(position);
    check(position,turn);

    if (isCheck == "b") {
      obj = blackMoves[i];
    }
    if (isCheck == "w") {
      obj = whiteMoves[i];
    }
    objx = parseInt(obj.piece[obj.piece.length - 2]);
    objy = parseInt(obj.piece[obj.piece.length - 1]);

    for (const key in position) {
      position[key].forEach((item, i) => {
        if (item.pos.x == objx && item.pos.y == objy) {
          selectSquare[0] = { x: objx, y: objy };
          selectedPiece = {
            key: key,
            index: i,
          };
        }
      });
    }

    if (matrix[obj.x][obj.y] != 0) {
      if (matrix[obj.x][obj.y][0] == selectedPiece.key[0]) {
        continue;
      }

      if (matrix[obj.x][obj.y][0] != selectedPiece.key[0]) {
        let ik = matrix[obj.x][obj.y];
        let temp = position[matrix[obj.x][obj.y]];
        for (let i = 0; i < temp.length; i++) {
          if (temp.length > 0 && temp[i]) {
            if (temp[i].pos.x == obj.x && temp[i].pos.y == obj.y) {
              temp.splice(i, 1);
              position[selectedPiece.key][selectedPiece.index].pos.x = obj.x;
              position[selectedPiece.key][selectedPiece.index].pos.y = obj.y;
              break;
            }
          }
        }
      }
      updateMatrix(position);
      moveGenerator(position);
      check(position,turn);

      if (isCheck ==checkOld ) {
        continue;
      }
      else{
        return false;
      }
    } else {
      position[selectedPiece.key][selectedPiece.index].pos.x = obj.x;
      position[selectedPiece.key][selectedPiece.index].pos.y = obj.y;

      updateMatrix(position);
      moveGenerator(position);
      check(position,checkOld);

      if (isCheck == checkOld) {
        continue;
      }
      else{
        return false
      }
    }
}

return true;
}
