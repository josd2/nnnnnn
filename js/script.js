var canvas = document.getElementById("pintura");
var ctx = canvas.getContext("2d");
let x;
let y;
let n;

function animate(){
  
    ctx.clearRect(0,0,pintura.width,pintura.height);
    anim();
    //mouse
    ctx.fillStyle = 'lightblue';
    ctx.strokeStyle = "blue"; 
    ctx.lineWidth = 4; 
    ctx.font = '15px Arial';
    ctx.fillStyle = 'blue';
    ctx.fillText(x,20,canvas.height-10);
    ctx.fillText(y,70,canvas.height-10);

    ctx.fillStyle = 'lightblue';
    ctx.beginPath();
    ctx.arc(x, y, 10,0, Math.PI*2);
    ctx.fill(); 
    ctx.stroke();
    requestAnimationFrame(animate)
}
animate();

pintura.addEventListener('mousemove',(info)=>{
    y = info.y + window.scrollY;
    x = info.x + window.scrollX;
})