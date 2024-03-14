export default function init(w: number, h: number, bgcolor: string) {
    const body = document.querySelector('body') as HTMLBodyElement;
    body.style.overflow = 'hidden';
    body.style.margin = '0';

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    canvas.style.backgroundColor = bgcolor;

    const scale = window.devicePixelRatio;
    canvas.width = Math.floor(w * scale);
    canvas.height = Math.floor(h * scale);

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.scale(scale, scale);
}
