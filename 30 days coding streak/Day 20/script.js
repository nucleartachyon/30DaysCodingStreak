const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

function draw() {
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);
        ctx.moveTo(55, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
        ctx.stroke();
}
draw()