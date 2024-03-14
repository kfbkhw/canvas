import { Particle } from './particle';

export default function animate(particles: Particle[], w: number, h: number) {
    setTimeout(() => {
        window.requestAnimationFrame(() => animate(particles, w, h));
    }, 1000 / 60);

    particles[0].ctx.clearRect(0, 0, w, h);

    particles.forEach((particle) => {
        particle.draw();
        particle.update();
        if (particle.y - particle.r > h) {
            particle.reset(w);
        }
    });
}
