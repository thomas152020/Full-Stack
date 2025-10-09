const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");


function desenharImagem1(ctx) {
  ctx.clearRect(0, 0, 300, 300);
  ctx.strokeStyle = "black";
  ctx.strokeRect(0, 0, 300, 300);

  
  ctx.font = "16px Arial";
  ctx.fillStyle = "gray";
  ctx.textAlign = "center";
  ctx.fillText("Canvas", 150, 120);

  
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(150, 150);
  ctx.strokeStyle = "blue";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(300, 0);
  ctx.lineTo(150, 150);
  ctx.strokeStyle = "red";
  ctx.stroke();

  
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(0, 150);
  ctx.lineTo(300, 150);
  ctx.moveTo(150, 0);
  ctx.lineTo(150, 300);
  ctx.stroke();

  
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 50, 50);

  ctx.fillStyle = "red";
  ctx.fillRect(250, 0, 50, 50);

  ctx.fillStyle = "red";
  ctx.fillRect(125, 150, 50, 50);

  ctx.fillStyle = "cyan";
  ctx.fillRect(0, 120, 30, 60);
  ctx.fillRect(270, 120, 30, 60);

  ctx.fillStyle = "yellow";
  ctx.fillRect(0, 250, 60, 50);
  ctx.fillStyle = "black";
  ctx.fillRect(250, 250, 50, 50);

  
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.arc(150, 150, 50, 0, Math.PI, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(150, 150, 70, 0, Math.PI, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(150, 150, 20, 0, Math.PI * 2);
  ctx.fillStyle = "cyan";
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(90, 180, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(210, 180, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  
  ctx.beginPath();
  ctx.arc(150, 300, 50, Math.PI, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(150, 300, 70, Math.PI, 0);
  ctx.stroke();

  ctx.fillStyle = "cyan";
  ctx.beginPath();
  ctx.arc(150, 300, 40, Math.PI, 0);
  ctx.fill();
  ctx.stroke();
}


function desenharImagem2(ctx) {
  ctx.clearRect(0, 0, 300, 300);


  ctx.fillStyle = "#90fcd1";
  ctx.fillRect(0, 0, 300, 300);

 
  ctx.fillStyle = "gray";
  ctx.fillRect(0, 180, 300, 120);

  
  ctx.fillStyle = "#a0522d";
  ctx.fillRect(130, 140, 60, 60);

  
  ctx.beginPath();
  ctx.moveTo(130, 140);   
  ctx.lineTo(190, 140);   
  ctx.lineTo(160, 110);   
  ctx.closePath();
  ctx.fillStyle = "tomato";
  ctx.fill();

  
  ctx.fillStyle = "#5b361a";
  ctx.fillRect(155, 170, 10, 30);

  
  ctx.fillStyle = "deepskyblue";
  ctx.fillRect(135, 150, 15, 15);
  ctx.fillRect(165, 150, 15, 15);

  
  ctx.beginPath();
  ctx.arc(240, 60, 25, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();

  
  desenharArvore(ctx, 50, 180);
  desenharArvore(ctx, 250, 180);
  desenharArvore(ctx, 30, 200);

  
  ctx.beginPath();
  ctx.arc(80, 260, 60, Math.PI, Math.PI * 2);
  ctx.fillStyle = "dodgerblue";
  ctx.fill();
}


function desenharArvore(ctx, x, y) {
  ctx.fillStyle = "saddlebrown";
  ctx.fillRect(x - 5, y, 10, 40);
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = "green";
  ctx.fill();
}


desenharImagem1(ctx1);
desenharImagem2(ctx2);
