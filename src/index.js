

import io from 'socket.io-client';
import p5 from 'p5';
import sketch from './sketch';
import broker from './broker';

const socket = io('http://localhost:8090');

socket.on('data', (data) => {
    broker.append(JSON.parse(data));
});

new p5(sketch(broker)); // eslint-disable-line no-new, new-cap
