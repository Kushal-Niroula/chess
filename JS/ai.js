function aiMoves(){

let position = JSON.parse(JSON.stringify(pieces));
let objIndex;


let obj = gameSearch(position,'b')
if(obj == 0){
  gameOverEvaluation(pieces);
  return 0;
}
updateMatrix(pieces);
moveGenerator(pieces);
check(pieces);

let objx = parseInt(obj.piece[obj.piece.length-2]);
let objy = parseInt(obj.piece[obj.piece.length-1]);
let objKey =  obj.piece.slice(0,2);


for(let i = 0 ; i<pieces[objKey].length ;i++ ){
  if(pieces[objKey][i].pos.x == objx && pieces[objKey][i].pos.y == objy){
      objIndex = i;
  }
}


    if(matrix[obj.x][obj.y] != 0 ){
      let ik= matrix[obj.x][obj.y];
      let temp = pieces[ik];


      for (let i = 0; i<temp.length ; i++){
        if(temp.length >0 && temp[i]){

        if(temp[i].pos.x == obj.x && temp[i].pos.y == obj.y){
          temp.splice(i,1);
          pieces[objKey][objIndex].pos.x = obj.x;
          pieces[objKey][objIndex].pos.y = obj.y;

          }
        }
      }
    }
    else{
      pieces[objKey][objIndex].pos.x = obj.x;
      pieces[objKey][objIndex].pos.y = obj.y;

    }
    moveCount ++

selectSquare = [];
selected = false;
checkPromotion(pieces);;
updateMatrix(pieces);
moveGenerator(pieces);
check(pieces);
update(pieces);

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








function gameOverEvaluation(pieces,test){

  let loop = true;
let iterator = 0;
let obj = {}

  while(loop == true){
    updateMatrix(pieces);
    moveGenerator(pieces);
    check(pieces);


  if(iterator >=blackMoves.length-1){
    window.alert('i lost');
    return(0);
  }
  iterator ++;

  if (turn == 'b'){
  obj = blackMoves[iterator];
}
if(turn == 'w'){
  obj = whiteMoves[iterator];
}
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
        updateMatrix(pieces);
        moveGenerator(pieces);
        check(pieces);
        if(isCheck == turn){
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
  updateMatrix(pieces);
  moveGenerator(pieces);
  check(pieces);
  if(isCheck == turn){
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
}
