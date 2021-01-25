canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
canvas.height = 640;
canvas.width = 640;
var player = -1;
var selected = false;
var selectSquare = [];
var flag;
var isCapture;
var selectedPiece;
var turn = 'w';
var castle = false;
const b1P = document.getElementById('blackPawn');
const b1K = document.getElementById('blackKing');
const b1N = document.getElementById('blackKnight');
const b1B = document.getElementById('blackBishop');
const b1Q = document.getElementById('blackQueen');
const b1R = document.getElementById('blackRook');
const w1P = document.getElementById('whitePawn');
const w1K = document.getElementById('whiteKing');
const w1N = document.getElementById('whiteKnight');
const w1B = document.getElementById('whiteBishop');
const w1Q = document.getElementById('whiteQueen');
const w1R = document.getElementById('whiteRook');


document.addEventListener('DOMContentLoaded' , function(){
  setTimeout(update,2000);
},false);




var pieces = {bP:[{img:b1P,pos:{x:0, y:1}}, {img:b1P,pos:{x:1, y:1}} , {img:b1P,pos:{x:2, y:1}} , {img:b1P,pos:{x:3, y:1}} ,
          {img:b1P,pos:{x:4, y:1}} , {img:b1P,pos:{x:5, y:1}} , {img:b1P,pos:{x:6, y:1}} , {img:b1P,pos:{x:7, y:1}}],
          bK : [{img:b1K, pos:{x:4 , y:0} , move:false}],
          bN : [{img:b1N , pos:{x:1, y:0}} , {img:b1N , pos:{x:6,y:0}}],
          bB : [{img:b1B, pos:{x:2 , y:0}} , {img:b1B , pos:{x:5 , y:0}}],
          bQ : [{img:b1Q,pos:{x:3,y:0}}],
          bR : [{img:b1R,pos:{x:0,y:0}, move:false} ,{img:b1R,pos:{x:7 , y:0},move:false}],

          wP : [{img:w1P,pos:{x:0, y:6}}, {img:w1P,pos:{x:1, y:6}} , {img:w1P,pos:{x:2, y:6}} , {img:w1P,pos:{x:3, y:6}} ,
          {img:w1P,pos:{x:4, y:6}} , {img:w1P,pos:{x:5, y:6}} , {img:w1P,pos:{x:6, y:6}} , {img:w1P,pos:{x:7, y:6}}],
          wK : [{img:w1K, pos:{x:4 , y:7} , move:0}],
          wN : [{img:w1N , pos:{x:1, y:7}} , {img:w1N , pos:{x:6,y:7}}],
          wB : [{img:w1B, pos:{x:2 , y:7}} , {img:w1B , pos:{x:5 , y:7}}],
          wQ : [{img:w1Q,pos:{x:3,y:7}}],
          wR : [{img:w1R,pos:{x:0,y:7},move:false} ,{img:w1R,pos:{x:7 , y:7},move:false}] }

var matrix = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];

updateMatrix();
function updateMatrix(){
  matrix = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];

  for(key in pieces){
    pieces[key].forEach((item, i) => {
      matrix[item.pos.x][item.pos.y] = key[0];
    });

  }

}

function update(){
  ctx.clearRect(0,0,640,640);
for (var i = 0 ; i<=8; i++)
{

    for (var j = 0 ; j<=8 ; j++)
    {
      if((j%2 == 0 && i%2 == 0) ||  (j%2==1 && i%2 == 1)){
        ctx.fillStyle = "#f5dcda";
        ctx.fillRect(i*80,j*80,80,80);

      }
      if((j%2 ==1 && i%2 == 0) || (j%2 == 0 && i%2 == 1) ){
        ctx.fillStyle = "#b58863";
        ctx.fillRect(i*80 , j*80 , 80 , 80)
      }
    }

}
drawPos();
drawSelect();
}


function drawPos(){
for(const key in pieces ){
  pieces[key].forEach((item, i) => {
    ctx.drawImage(item.img, item.pos.x * 80 + 20 , item.pos.y * 80 + 20)  });

}}

canvas.addEventListener('click',handleClick);



function handleClick(event){
  var x = event.clientX;
  var y = event.clientY;
  let xR = Math.floor(x / 80);
  let yR = Math.floor(y / 80);
  select(xR , yR);

}
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


function drawSelect(){
  if(selectSquare.length>0){
  ctx.strokeStyle = "red";
  ctx.strokeRect(selectSquare[0].x * 80 ,selectSquare[0].y * 80 , 80 , 80);
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
      default:
        return true;
      }
    }


function checkPromotion(piece,x,y){
    if(piece.key == 'wP'){
      if(y == 0){
        pieces[piece.key].splice(piece.index,1);
        pieces['wQ'].push({img:w1Q , pos:{x:x , y:y}})
      }
    }
    if(piece.key == 'bP'){
      if(y == 7){
        pieces[piece.key].splice(piece.index,1);
        pieces['bQ'].push({img:b1Q , pos:{x:x , y:y}});
      }
    }}


    function kingMoveValid(key,x,y){
      if( x == selectSquare[0].x +1 || x == selectSquare[0].x-1 ){
        if(y== selectSquare[0].y || y == selectSquare[0].y +1 || y == selectSquare[0].y -1){
          return true;
        }
      }
      else if( x == selectSquare[0].x){
        if(y == selectSquare[0].y +1 || y == selectSquare[0].y -1){
          return true;
        }
      }
      else{
        return false;
      }
    }


function rookMoveValid(key,x,y){

  if(x == selectSquare[0].x){
    let ydiff = y - selectSquare[0].y;
    let i =  ydiff/Math.abs(ydiff);
    while(i != ydiff){
      if(matrix[x][selectSquare[0].y +i] !=0){
        return false;
      }
      i = i + ydiff / Math.abs(ydiff);
    }
  }
  if(y == selectSquare[0].y){
    let xdiff = x - selectSquare[0].x;
    let j = xdiff/Math.abs(xdiff);
    while(j != xdiff){
      if(matrix[selectSquare[0].x + j][y]!=0){
        return false;
      }
      j =  j + xdiff / Math.abs(xdiff);
    }

  }
  if(x == selectSquare[0].x && y ==  selectSquare[0].y){
    return false;
  }
if(x == selectSquare[0].x || y == selectSquare[0].y){
  return true;
}
  return false;
}


function bishopMoveValid(key,x,y){
  if(x == selectSquare[0].x || y == selectSquare[0].y){
    return false;
  }
  if(Math.abs(x-selectSquare[0].x) != Math.abs(y-selectSquare[0].y)){
    return false;
  }
  xdiff = x - selectSquare[0].x;
  ydiff = y - selectSquare[0].y;
  let i = xdiff / Math.abs(xdiff);
  let j = ydiff/ Math.abs(ydiff);
  while( Math.abs(i) != Math.abs(xdiff)){
    if(matrix[selectSquare[0].x + i][selectSquare[0].y + j]!=0){

      return false;
    }
    i = i + (xdiff/Math.abs(xdiff));
    j = j + (ydiff/Math.abs(ydiff));

  }
  return true;
}

function knightMoveValid(key,x,y){
  if((x == selectSquare[0].x + 2) || x == selectSquare[0].x - 2){
    if((y == selectSquare[0].y + 1) || y == selectSquare[0].y -1){
      return true;
    }
    }
    if((y == selectSquare[0].y +2 )|| y == selectSquare[0].y - 2){
      if(x == selectSquare[0].x + 1 || x == selectSquare[0].x -1){
        return true;
      }
    }
    return false;
}
