const io = require('socket.io-client');

const socket = io('http://localhost:3000');

console.log('Attempting to connect to WebSocket server...');

const timeout = setTimeout(() => {
    console.error('Test Failed: Timed out waiting for metrics.');
    socket.disconnect();
    process.exit(1);
}, 10000);

socket.on('connect', () => {
    console.log('Successfully connected to server.');
});

socket.on('metrics', (data) => {
    console.log('Received metrics event:', data);

    if (data.callsWaiting !== undefined && data.activeCalls !== undefined) {
        console.log('Test Passed: Valid metrics received.');
        clearTimeout(timeout);
        socket.disconnect();
        process.exit(0);
    } else {
        console.log('Warning: Received metrics but structure seems incorrect.');
    }
});

socket.on('disconnect', () => {
    console.log('Disconnected.');
});
