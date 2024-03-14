const draw = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const canvasWidth = 300;
    const canvasHeight = 300;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    const scale = window.devicePixelRatio;
    canvas.width = Math.floor(canvasWidth * scale);
    canvas.height = Math.floor(canvasHeight * scale);
    ctx.scale(scale, scale);

    canvas.style.backgroundColor = 'cadetblue';

    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(200, 200, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.arc(200, 100, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(75, 200, 50, 0, Math.PI * 2);
    ctx.moveTo(110, 200);
    ctx.arc(75, 200, 35, 0, Math.PI);
    ctx.moveTo(65, 190);
    ctx.arc(60, 190, 5, 0, Math.PI * 2);
    ctx.moveTo(95, 190);
    ctx.arc(90, 190, 5, 0, Math.PI * 2);
    ctx.stroke();

    ctx.font = '20px Verdana';
    ctx.textAlign = 'center';
    ctx.fillText('canvas', canvasWidth / 2, canvasHeight / 2);
};

window.addEventListener('load', draw);
