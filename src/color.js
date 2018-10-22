const color = p5 => ({
    byDistance: (distance) => {
        const r = p5.map(distance, 0, 2000, 255, 0);
        const g = p5.map(distance, 0, 2000, 0, 255);
        const b = p5.map(distance, 0, 2000, 0, 0);

        return { r, g, b };
    }
});

export default color;
