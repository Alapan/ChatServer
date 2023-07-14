import { logger } from '../utils/logger';
const PORT = 3000;
const io = require('socket.io')(PORT)

logger.info(`Server is listening on port ${PORT}`);

io.of('/').on('connect', (socket) => {
  logger.info('A client connected');
  logger.info(`Number of clients: ${io.of('/').server.engine.clientsCount}`);

  socket.on('disconnect', (reason) => {
    logger.info(`A client disconnected. Reason: ${reason}`);
    logger.info(`Number of clients: ${io.of('/').server.engine.clientsCount}`);
  });

  socket.on('list', (data) => {
    console.log(data);
    const users = [];

    for (const [key, value] of io.of('/').sockets) {
      console.log('Value: ', value)
      users.push(value.nickname);
    }
    socket.emit('list', {
      sender: data.sender,
      action: 'list',
      users
    });
  });
});
