import init from './init';
import { createParticles } from './particle';
import animate from './animate';

const WIDTH = innerWidth;
const HEIGHT = innerHeight;
const BACKGROUND_COLOR = '#EEEEEE';
const COLOR = '#FAA300';
const TOTAL = 20;
const MIN_SIZE = 30;
const MAX_SIZE = 50;
const MIN_SPEED = 5;
const MAX_SPEED = 10;

const app = () => {
    init(WIDTH, HEIGHT, BACKGROUND_COLOR);
    const particles = createParticles(
        TOTAL,
        WIDTH,
        HEIGHT,
        [MIN_SIZE, MAX_SIZE],
        [MIN_SPEED, MAX_SPEED],
        COLOR
    );
    animate(particles, WIDTH, HEIGHT);
};

window.addEventListener('load', app);
