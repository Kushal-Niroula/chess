
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


drawDots();
drawPos();
drawCaptured();
drawCheck();
drawSelect();


}

function updateMatrix(pieces){
  matrix = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];

  for(let key in pieces){
    pieces[key].forEach((item, i) => {
      matrix[item.pos.x][item.pos.y] = key;
    });

  }

}
