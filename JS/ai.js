function aiMoves(){

let position = JSON.parse(JSON.stringify(pieces));
let objIndex;


let obj = gameSearch(position,'b')
if(obj == 0){
  window.alert('I lost');
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
