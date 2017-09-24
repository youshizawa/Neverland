function drawLine(e)
{//绘制直线
    if(flag){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.stroke();   
    }
}

function drawRect(e)
{//绘制矩形
    if(flag){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.strokeRect(x,y,e.offsetX-x,e.offsetY-y);
    }
}