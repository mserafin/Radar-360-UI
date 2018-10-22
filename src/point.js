import color from './color';

class Point {
    constructor(data) {
        this.p5 = window.p5;
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.angle = data.angle;
        this.speed = data.speed;
        this.distance = data.distance;
        this.radius = -1;
        this.scale = 1000;
        this.color = color(this.p5).byDistance(this.distance);
    }

    setEllipseRadius() {
        const distance = this.p5.dist(
            this.innerWidth / 2,
            this.innerHeight / 2,
            this.x || 1,
            this.y || 1
        );

        const diagonal = Math.sqrt((this.innerWidth ** 2) + (this.innerHeight ** 2));
        this.radius = this.p5.map(distance, 0, diagonal, 7, 30);
    }

    setStrokeSettings(alpha) {
        this.p5.noStroke();
        this.p5.fill(this.color.r, this.color.g, this.color.b, alpha);
    }

    drawPoint(zoom) {
        this.setStrokeSettings(200);

        const distance = this.p5.map(this.distance, 1, 8000, 0.01, 0.59);
        const angle = this.angle + 180;
        const space = distance * zoom;

        this.x = (this.innerWidth / 2) + this.scale * (this.p5.cos(angle * Math.PI / 180) * space);
        this.y = (this.innerHeight / 2) + this.scale * (this.p5.sin(angle * Math.PI / 180) * space);

        this.setEllipseRadius();
        this.p5.ellipse(this.x, this.y, this.radius);
    }

    connectPoints(point) {
        this.setStrokeSettings(255);

        const distance = this.p5.dist(this.x, this.y, point.x, point.y);
        if (distance < this.distance * 0.051) {
            this.p5.strokeWeight(2);
            this.p5.stroke(this.color.r, this.color.g, this.color.b, 200);
            this.p5.line(this.x, this.y, point.x, point.y);
        }
    }
}

export default Point;
