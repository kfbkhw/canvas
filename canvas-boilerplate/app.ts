class Canvas {
    readonly $body: HTMLBodyElement;
    readonly $canvas: HTMLCanvasElement;
    readonly ctx: CanvasRenderingContext2D;
    readonly scale: number;
    readonly fps: number;
    canvasWidth: number;
    canvasHeight: number;

    constructor(fps: number) {
        this.$body = document.querySelector('body') as HTMLBodyElement;
        this.$canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.ctx = this.$canvas.getContext('2d') as CanvasRenderingContext2D;
        this.scale = window.devicePixelRatio;
        this.fps = fps;
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
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
    }

    render(callbackFn: () => void) {
        setTimeout(() => {
            window.requestAnimationFrame(() => this.render(callbackFn));
        }, 1000 / this.fps);

        callbackFn();
    }
}

const canvas = new Canvas(60);

const app = () => {
    canvas.init();
    canvas.render(canvas.ctx.fillRect(10, 10, 100, 100));
};

const reload = () => {
    canvas.init();
};

window.addEventListener('load', app);
window.addEventListener('resize', reload);
