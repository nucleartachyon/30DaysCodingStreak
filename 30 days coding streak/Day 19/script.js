
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth
canvas.height = innerHeight
function draw() {      
      ctx.fillRect(20,20,400,400);
      ctx.clearRect(115,115,200,200);
      ctx.strokeRect(165,165,100,100);
  }