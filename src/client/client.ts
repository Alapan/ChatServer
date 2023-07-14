import { logger } from '../utils/logger';
const readline = require('readline');

const io = require('socket.io-client');
const socket = io('http://localhost:3000');

let nickname = null;

logger.info('Connecting to the server...');

socket.on('connect', () => {
  nickname = process.argv[2];
  logger.info(`[INFO]: Welcome ${nickname}`);
});

socket.on('disconnect', (reason) => {
  logger.info(`[INFO]: Server disconnected. Reason ${reason} `);
});

socket.on('list', (data) => {
  logger.info(`[INFO]: List of connected users: `);
  for (let i = 0; i < data.length; i++) {
    console.log(data.users[i]);
  }
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  if (input === 'list;') {
    socket.emit('list', {
      sender: nickname,
      action: 'list'
    });
  }
});