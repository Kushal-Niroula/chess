/* function to analyze , pick and move pieces from ai side  */
function aiMoves() {
  if (moveCount % 2 == 0) {
    turn = "b";
  } else {
    turn = "w";
  }
  let position = objectClone(pieces);
  let objIndex;

  let obj = gameSearch(
    position,
    turn
  ); /* position evaluation and picking best move */
  if (obj == 0) {
    gameOverEvaluation(pieces);
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
  if (isCheck == turn) {
    gameOverEvaluation(pieces, true);
  }

  if (turn == "b" || mode == "ai") {
    setTimeout(aiMoves, 0);
  }
}



/**
*
* @param {pieces} object
* @param {test} boolean
*evaluates the position and detects if it is checkmate on either side
*/
function gameOverEvaluation(pieces, test) {
  let loop = true;
  let iterator = 0;
  let obj = {};

  while (loop == true) {
    updateMatrix(pieces);
    moveGenerator(pieces);
    check(pieces,turn);

    if (isCheck == "b") {
      if (iterator >= blackMoves.length - 1) {
        gameOverFunction(isCheck);
        return 0;
      }
    }
    if (isCheck == "w") {
      if (iterator >= whiteMoves.length - 1) {
        gameOverFunction(isCheck);
        return 0;
      }
    }

    iterator++;

    if (turn == "b") {
      obj = blackMoves[iterator];
    }
    if (turn == "w") {
      obj = whiteMoves[iterator];
    }
    objx = parseInt(obj.piece[obj.piece.length - 2]);
    objy = parseInt(obj.piece[obj.piece.length - 1]);

    for (const key in pieces) {
      pieces[key].forEach((item, i) => {
        if (item.pos.x == objx && item.pos.y == objy) {
          selectSquare.push({ x: objx, y: objy });
          selectedPiece = {
            key: key,
            index: i,
          };
        }
      });
    }

    if (matrix[obj.x][obj.y] != 0) {
      if (matrix[obj.x][obj.y][0] == selectedPiece.key[0]) {
        loop = true;
        continue;
      }

      if (matrix[obj.x][obj.y][0] != selectedPiece.key[0]) {
        let ik = matrix[obj.x][obj.y];
        let temp = pieces[matrix[obj.x][obj.y]];
        for (let i = 0; i < temp.length; i++) {
          if (temp.length > 0 && temp[i]) {
            if (temp[i].pos.x == obj.x && temp[i].pos.y == obj.y) {
              temp.splice(i, 1);
              pieces[selectedPiece.key][selectedPiece.index].pos.x = obj.x;
              pieces[selectedPiece.key][selectedPiece.index].pos.y = obj.y;
              loop = false;
              moveCount++;
              updateMatrix(pieces);
              moveGenerator(pieces);
              check(pieces,turn);

              if (isCheck == turn || (isCheck != turn && test == true)) {
                if (color == "w") {
                  pieces[ik].push({
                    img: eval(ik + 1),
                    pos: { x: obj.x, y: obj.y },
                  });
                }
                if (color == "b") {
                  if (ik[0] == "w") {
                    let isrc = "b" + ik[1] + "1";
                    pieces[ik].push({
                      img: eval(isrc),
                      pos: { x: obj.x, y: obj.y },
                    });
                  }
                  if (ik[0] == "b") {
                    let isrc = "w" + ik[1] + "1";
                    pieces[ik].push({
                      img: eval(isrc),
                      pos: { x: obj.x, y: obj.y },
                    });
                  }
                }
                pieces[selectedPiece.key][selectedPiece.index].pos.x = objx;
                pieces[selectedPiece.key][selectedPiece.index].pos.y = objy;
                moveCount = moveCount - 1;

                if (isCheck != turn && test == true) {
                  return;
                }

                loop = true;
              }
            }
          }
        }
      }
    } else {
      pieces[selectedPiece.key][selectedPiece.index].pos.x = obj.x;
      pieces[selectedPiece.key][selectedPiece.index].pos.y = obj.y;
      loop = false;
      moveCount++;
      updateMatrix(pieces);
      moveGenerator(pieces);
      check(pieces,turn);
      if (isCheck == turn || (isCheck != turn && test == true)) {
        pieces[selectedPiece.key][selectedPiece.index].pos.x = objx;
        pieces[selectedPiece.key][selectedPiece.index].pos.y = objy;
        moveCount = moveCount - 1;
        if (test == true && isCheck != turn) {
          return 0;
        }
        loop = true;
      }
    }
  }

  selectSquare = [];
  selected = false;

  updateMatrix(pieces);
  update(pieces);

  if (moveCount % 2 == 0) {
    turn = "b";
  } else {
    turn = "w";
  }
}
