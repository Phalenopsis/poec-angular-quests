export class Heart {
    constructor(
        private x: number,
        private y: number,
        private vx: number,
        private vy: number
    ) {

    }

    run() {
        this.x += this.vx;
        this.y += this.vy;
    }
}