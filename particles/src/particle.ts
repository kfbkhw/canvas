import { getRandomNumber } from './util';

export class Particle {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    radius: number;
    originalSpeed: number;
    speed: number;
    acc: number;
    color: string;

    constructor(
        x: number,
        y: number,
        radius: number,
        speed: number,
        acceleration: number,
        color: string
    ) {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.originalSpeed = speed;
        this.speed = speed;
        this.acc = acceleration;
        this.color = color;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    update() {
        this.speed *= this.acc;
        this.y += this.speed;
    }

    reset(width: number) {
        this.x = getRandomNumber(width);
        this.y = 0 - this.radius;
        this.speed = this.originalSpeed;
    }
}
