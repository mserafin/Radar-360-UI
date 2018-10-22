import points from './points';
import Point from './point';
import showInfo from './show-info';

const sketch = (broker) => {
    const { innerWidth, innerHeight } = window;

    let lastAngle = -1;

    return (p5) => {
        window.p5 = p5;

        p5.setup = () => { // eslint-disable-line no-param-reassign
            p5.createCanvas(innerWidth, innerHeight);
            p5.background(0);
        };

        p5.draw = () => { // eslint-disable-line no-param-reassign
            p5.background(0, 10);

            const { data } = broker;
            const isShowInfo = index => index % 4 === 0;
            const isOutRange = distance => distance !== 8190;
            const isFullRotation = angle => angle < lastAngle;

            if (data && isOutRange(data.distance)) {
                if (isFullRotation(data.angle)) {
                    points.clear();
                }

                lastAngle = data.angle;
                points.append(new Point({ ...data }));
                points.points.forEach((point, index) => {
                    if (index > 0) {
                        point.connectPoints(points.findIndex(index - 1));
                    }

                    point.drawPoint(1.5);
                    
                    if (isShowInfo(index)) {
                        showInfo(point);
                    }
                });
            }
        };
    };
};

export default sketch;
