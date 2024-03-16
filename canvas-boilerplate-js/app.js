const BACKGROUND_COLOR = '#fff';
const FPS = 60;

class Canvas {
    constructor(fps) {
        this.$body = document.querySelector('body');
        this.$canvas = document.getElementById('canvas');
        this.ctx = $canvas.getContext('2d');
        this.scale = window.devicePixelRatio;
        this.fps = fps;
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
    }

    init(backgroundColor) {
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
    }

    render() {
        const animate = () => {
            setTimeout(() => {
                window.requestAnimationFrame(animate);
            }, 1000 / this.fps);

            // Add animation
        };
        animate();
    }
}

const canvas = new Canvas(FPS);

const app = () => {
    canvas.init(BACKGROUND_COLOR);
    canvas.render();
};

const reload = () => {
    canvas.init(BACKGROUND_COLOR);
};

window.addEventListener('load', app);
window.addEventListener('resize', reload);
