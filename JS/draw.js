function drawPos(){
    for(const key in pieces ){
      pieces[key].forEach((item, i) => {
        ctx.drawImage(item.img, item.pos.x * 80 + 20 , item.pos.y * 80 + 20)  });

}}
function drawSelect(){
  if(selectSquare.length>0){
  ctx.strokeStyle = "red";
  ctx.strokeRect(selectSquare[0].x * 80 ,selectSquare[0].y * 80 , 80 , 80);
}}
