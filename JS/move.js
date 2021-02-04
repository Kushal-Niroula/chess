/* selects pieces based on the click function and moves if allowed square is again clicked */
/* parameters: x = number(x-coordinate of click) , y= number(y-coordinate of click) */
function select(x, y) {
  if (selected == false) {
    for (const key in pieces) {
      if (key[0] == turn) {
        pieces[key].forEach((item, i) => {
          if (item.pos.x == x && item.pos.y == y) {
            selectSquare[0] = { x: x, y: y };
            selectedPiece = {
              key: key,
              index: i,
            };

            if (key == "wP" || key == "bP") {
              dots = generatePawnMove(key, x, y);
            }
            if (key == "wB" || key == "bB") {
              dots = generateBishopMove(key, x, y);
            }
            if (key == "wK" || key == "bK") {
              dots = generateKingMove(key, x, y);
            }
            if (key == "wR" || key == "bR") {
              dots = generateRookMove(key, x, y);
            }
            if (key == "wN" || key == "bN") {
              dots = generateKnightMove(key, x, y);
            }
            if (key == "wQ" || key == "bQ") {
              dots = generateQueenMove(key, x, y);
            }

            update();
            selected = true;
            flag = key;
            return;
          }
        });
      }
    }
  } else {
    move(x, y, selectedPiece, pieces);

    selected = false;
    selectSquare = [];
    update();

    if (turn == "b" && mode != "p") {
      setTimeout(aiMoves, 0);
    }
  }
}

/* player side move function */
/* parameters: x,y=number(selected square coordinate) ,piece=obect (selected piece) , pieces =obect (board position) */

function move(x, y, piece, pieces) {
  let tempCap = 0;
  let validated = false;
  updateMatrix(pieces);
  moveGenerator(pieces);
  let existing = matrix[x][y];
  if (turn == "w") {
    for (let i = 0; i < whiteMoves.length; i++) {
      if (
        x == whiteMoves[i].x &&
        y == whiteMoves[i].y &&
        whiteMoves[i].piece.slice(0, 2) == flag
      ) {
        if (
          parseInt(whiteMoves[i].piece[2]) == selectSquare[0].x &&
          parseInt(whiteMoves[i].piece[3]) == selectSquare[0].y
        ) {
          validated = true;
        }
      }
    }
  }
  if (turn == "b" && mode == "p") {
    for (let i = 0; i < blackMoves.length; i++) {
      if (
        x == blackMoves[i].x &&
        y == blackMoves[i].y &&
        blackMoves[i].piece.slice(0, 2) == flag
      ) {
        if (
          parseInt(blackMoves[i].piece[2]) == selectSquare[0].x &&
          parseInt(blackMoves[i].piece[3]) == selectSquare[0].y
        ) {
          validated = true;
        }
      }
    }
  }

  if (validated) {
    if (existing != 0 && existing[0] == flag[0]) {
      return 0;
    }
    if (existing != 0 && existing[0] != flag[0]) {
      for (let i = 0; i < pieces[existing].length; i++) {
        if (pieces[existing][i].pos.x == x && pieces[existing][i].pos.y == y) {
          tempCap = i;
          pieces[existing].splice(i, 1);
        }
      }
    }

    pieces[piece.key][piece.index].pos.x = x;
    pieces[piece.key][piece.index].pos.y = y;

    moveCount++;

    updateMatrix(pieces);
    moveGenerator(pieces);
    check(pieces);

    if (isCheck == turn) {
      pieces[piece.key][piece.index].pos.x = selectSquare[0].x;
      pieces[piece.key][piece.index].pos.y = selectSquare[0].y;
      if (tempCap != 0) {
        let isrc = existing + "1";
        if (color == "b") {
          if (existing[0] == "b") {
            isrc = "w" + existing[1] + "1";
          } else {
            isrc = "b" + existing[1] + "1";
          }
        }
        pieces[existing].push({ img: eval(isrc), pos: { x: x, y: y } });
      }

      moveCount--;
    } else {
      if(piece.key == 'bK' || piece.key == 'wK' || piece.key == 'bR' || piece.key == 'wR'){
        pieces[piece.key][piece.index].move = true;
      }
      sound1.play();
      arrow = [];
      arrow = [selectSquare[0].x, selectSquare[0].y, x, y];
    }

    if (moveCount % 2 == 0) {
      turn = "b";
    } else {
      turn = "w";
    }
    if (isCheck && mode == "p") {
      gameOverEvaluation(pieces, true);
    }
  }
  if(isCheck){
    checkSound.play();
  }
  if (piece.key == "wK" || piece.key == "bK") {
    if (castle(piece.key, x, y, selectSquare)) {
      moveCount++;
    }
  }

  checkPromotion(pieces);
  updateMatrix(pieces);
  moveGenerator(pieces);
  check(pieces);
  if (moveCount % 2 == 0) {
    turn = "b";
  } else {
    turn = "w";
  }
}
