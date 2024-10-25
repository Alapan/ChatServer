import { logger } from '../utils/logger'
const io = require('socket.io-client');
const socket = io('http://localhost:3000');

let nickname = '';

logger.info('Connecting to the server...');

socket.on('connect', () => {
  nickname = process.argv[2];
  logger.info(`[INFO]: Welcome ${nickname}`);
});

socket.on('disconnect', (reason) => {
  logger.info(`[INFO]: Client disconnected. Reason ${reason} `);
});
