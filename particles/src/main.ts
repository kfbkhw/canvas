interface IParticle {
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    r: number;
    color: string;
}

class Particle {
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    r: number;
    color: string;

    constructor({ ctx, x, y, r, color }: IParticle) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
}

const draw = (ctx: CanvasRenderingContext2D) => {
    const x = 100;
    const y = 100;
    const r = 50;
    const color = 'yellow';

    const particle = new Particle({ ctx, x, y, r, color });
    particle.draw();
};

const init = () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const canvasWidth = 300;
    const canvasHeight = 300;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    const scale = window.devicePixelRatio;
    canvas.width = Math.floor(canvasWidth * scale);
    canvas.height = Math.floor(canvasHeight * scale);
    ctx.scale(scale, scale);

    draw(ctx);
};

window.addEventListener('load', init);
