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
};

window.addEventListener('load', draw);
