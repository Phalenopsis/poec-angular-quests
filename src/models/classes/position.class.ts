export class Position {
    constructor(
        public x: number,
        public y: number
    ) { }

    move(vx: number, vy: number) {
        this.x += vx;
        this.y += vy;
    }
}