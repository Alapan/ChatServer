import { logger } from '../utils/logger';
const PORT = 3000;
const io = require('socket.io')(PORT)

logger.info(`Server is listening on port ${PORT}`);

io.of('/').on('connect', (socket) => {
  logger.info('A client connected');

  socket.on('disconnect', (reason) => {
    logger.info(`A client disconnected. Reason: ${reason}`);
    logger.info(`Number of clients: ${io.of('/').server.engine.clientsCount}`);
  });
});
