import {io} from '/socket.io/socket.io.esm.min.js';

const socket = io();

socket.on('connect', () => {
    console.log('User Connected with ID: ');
});