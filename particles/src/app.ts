import { getRandomNumber } from './util';
import { Particle } from './particle';

const BACKGROUND_COLOR = '#EEEEEE';
const FPS = 60;

const MIN_SIZE = 50;
const MAX_SIZE = 70;
const MIN_SPEED = 1;
const MAX_SPEED = 5;
const ACCELERATION = 1.02;
const TOTAL_RATIO = 20;
const COLOR = '#FAA300';

class Canvas {
    readonly $body: HTMLBodyElement;
    readonly $canvas: HTMLCanvasElement;
    readonly ctx: CanvasRenderingContext2D;
    readonly scale: number;
    readonly fps: number;
    canvasWidth: number;
    canvasHeight: number;
    totalParticles: number;
    particles: Particle[];

    constructor(fps: number) {
        this.$body = document.querySelector('body') as HTMLBodyElement;
        this.$canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.ctx = this.$canvas.getContext('2d') as CanvasRenderingContext2D;
        this.scale = window.devicePixelRatio;
        this.fps = fps;
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
        this.totalParticles = Math.floor(this.canvasWidth / TOTAL_RATIO);
        this.particles = [];
    }

    init(backgroundColor: string) {
        this.$body.style.backgroundColor = backgroundColor;
        this.$body.style.overflow = 'hidden';
        this.$body.style.margin = '0';

        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;

        this.$canvas.style.width = `${this.canvasWidth}px`;
        this.$canvas.style.height = `${this.canvasHeight}px`;
        this.$canvas.width = Math.floor(this.canvasWidth * this.scale);
        this.$canvas.height = Math.floor(this.canvasHeight * this.scale);
        this.ctx.scale(this.scale, this.scale);

        this.$canvas.style.filter = 'url(#filter)';
        this.totalParticles = Math.floor(this.canvasWidth / TOTAL_RATIO);
    }

    createParticles() {
        this.particles = [];

        for (let i = 0; i < this.totalParticles; i++) {
            const x = getRandomNumber(this.canvasWidth);
            const y = getRandomNumber(this.canvasHeight);
            const r = getRandomNumber(MAX_SIZE, MIN_SIZE);
            const s = getRandomNumber(MAX_SPEED, MIN_SPEED);

            const particle = new Particle(x, y, r, s, ACCELERATION, COLOR);
            this.particles.push(particle);
        }
    }

    render() {
        const animate = () => {
            setTimeout(() => {
                window.requestAnimationFrame(animate);
            }, 1000 / this.fps);

            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

            this.particles.forEach((particle) => {
                particle.draw();
                particle.update();
                if (particle.y - particle.radius > this.canvasHeight) {
                    particle.reset(this.canvasWidth);
                }
            });
        };
        animate();
    }
}

const canvas = new Canvas(FPS);

const app = () => {
    canvas.init(BACKGROUND_COLOR);
    canvas.createParticles();
    canvas.render();
};

const reload = () => {
    canvas.init(BACKGROUND_COLOR);
    canvas.createParticles();
};

window.addEventListener('load', app);
window.addEventListener('resize', reload);
