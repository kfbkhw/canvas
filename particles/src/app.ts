import { getRandomNumber } from './util';
import { Particle } from './particle';

const BACKGROUND_COLOR = '#EEEEEE';
const COLOR = '#FAA300';

const MIN_SIZE = 50;
const MAX_SIZE = 70;
const MIN_SPEED = 1;
const MAX_SPEED = 5;
const ACCELERATION = 1.02;

let WIDTH = innerWidth;
let HEIGHT = innerHeight;
let TOTAL = WIDTH / 50;

const $body = document.querySelector('body') as HTMLBodyElement;
const $canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = $canvas.getContext('2d') as CanvasRenderingContext2D;
const scale = window.devicePixelRatio;

$body.style.overflow = 'hidden';
$body.style.margin = '0';
$body.style.backgroundColor = BACKGROUND_COLOR;

const init = () => {
    WIDTH = innerWidth;
    HEIGHT = innerHeight;
    TOTAL = WIDTH / 50;

    $canvas.style.width = `${WIDTH}px`;
    $canvas.style.height = `${HEIGHT}px`;
    $canvas.style.filter = 'url(#filter)';

    $canvas.width = Math.floor(WIDTH * scale);
    $canvas.height = Math.floor(HEIGHT * scale);
    ctx.scale(scale, scale);

    return createParticles();
};

const createParticles = () => {
    const particles = [];

    for (let i = 0; i < TOTAL; i++) {
        const x = getRandomNumber(WIDTH);
        const y = getRandomNumber(HEIGHT);
        const r = getRandomNumber(MAX_SIZE, MIN_SIZE);
        const s = getRandomNumber(MAX_SPEED, MIN_SPEED);

        const particle = new Particle(x, y, r, s, ACCELERATION, COLOR);
        particles.push(particle);
    }

    return particles;
};

const animate = (particles: Particle[]) => {
    setTimeout(() => {
        window.requestAnimationFrame(() => animate(particles));
    }, 1000 / 60);

    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    particles.forEach((particle) => {
        particle.draw();
        particle.update();
        if (particle.y - particle.radius > HEIGHT) {
            particle.reset(WIDTH);
        }
    });
};

const app = () => {
    const particles = init();
    animate(particles);
};

window.addEventListener('load', app);
window.addEventListener('resize', init);
