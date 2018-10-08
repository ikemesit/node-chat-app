const socket = io();

socket.on('connect', () => {
    console.log('connected to server');

    socket.emit('createMessage', {
        to: 'mo@example.com',
        text: 'Hey, get over here!!'
    });
});

socket.on('disconnect', () => {
    console.log('disconnected from server');
});

socket.on('newMessage', (message) => {
    console.log('new message', message);
});
