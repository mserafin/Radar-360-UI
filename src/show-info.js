const showInfo = (point) => {
    const { p5, innerWidth, innerHeight } = window;
    const { angle, distance } = point;
    const { r, g, b } = point.color;
    const x = (innerWidth / 2) + 115 * 1.1 * (p5.cos((angle + 180) * Math.PI / 180) * 1.5);
    const y = (innerHeight / 2) + 115 * 1.1 * (p5.sin((angle + 180) * Math.PI / 180) * 1.5);
    const rad = (angle * p5.PI) / 180;

    p5.textSize(16);
    p5.text(`${(distance * 0.001).toFixed(2)} m`, x, y);
    p5.stroke(r, g, b, 20);
    p5.strokeWeight(0.5);
    p5.line(point.x, point.y, x, y);
    p5.fill(200, 7);
    p5.noStroke();
    p5.arc(innerWidth / 2, innerHeight / 2, 35, 35, 0, rad);
};

export default showInfo;
