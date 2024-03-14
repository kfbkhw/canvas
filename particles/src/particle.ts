import { getRandomNumber } from './util';

interface IParticle {
    x: number;
    y: number;
    r: number;
    s: number;
    color: string;
}

export class Particle {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    r: number;
    speed: number;
    color: string;

    constructor({ x, y, r, s, color }: IParticle) {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.x = x;
        this.y = y;
        this.r = r;
        this.speed = s;
        this.color = color;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    update() {
        this.y += this.speed;
    }

    reset(width: number) {
        this.x = getRandomNumber(0, width);
        this.y = 0 - this.r;
    }
}

export const createParticles = (
    count: number,
    width: number,
    height: number,
    size: [number, number],
    speed: [number, number],
    color: string
) => {
    const particles = [];

    for (let i = 0; i < count; i++) {
        const x = getRandomNumber(0, width);
        const y = getRandomNumber(0, height);
        const r = getRandomNumber(size[0], size[1]);
        const s = getRandomNumber(speed[0], speed[1]);

        const particle = new Particle({ x, y, r, s, color });
        particles.push(particle);
    }

    return particles;
};
