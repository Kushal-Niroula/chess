function drawPos(){
    for(const key in pieces ){
      pieces[key].forEach((item, i) => {
        ctx.drawImage(item.img, item.pos.x * 80 + 20 , item.pos.y * 80 + 20)  });

}}
function drawSelect(){
  if(selectSquare.length>0){
  ctx.strokeStyle = "green";
  ctx.strokeRect(selectSquare[0].x * 80 ,selectSquare[0].y * 80 , 80 , 80);
}}

function drawCheck(){
  ctx.strokeStyle = "red";
  if(isCheck == 'w'){
    ctx.strokeRect(pieces['wK'][0].pos.x * 80 , pieces['wK'][0].pos.y * 80 ,80 ,80);
  }
  if(isCheck == 'b'){
    ctx.strokeRect(pieces['bK'][0].pos.x * 80 , pieces['bK'][0].pos.y * 80 ,80 ,80);
  }
}
function drawDots(){
  ctx.strokeStyle = "blue";
  if(dots.length>=1){
  for(let i = 0; i<dots.length ; i++ ){
    ctx.strokeRect(dots[i].x * 80 ,dots[i].y * 80 ,80 ,80);

  }
}
dots = [];
}
