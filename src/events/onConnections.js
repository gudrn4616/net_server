import { onDate } from './onDate.js';
import { onEnd } from './onEnd.js';
import { onError } from './onError.js';

export const onConnections = (socket) => {
  console.log('클라이언트가 연결되었습니다:', socket.remoteAddress, socket.remotePort);

  socket.buffer = Buffer.alloc(0);

  socket.on('data', onDate(socket));
  socket.on('end', onEnd(socket));
  socket.on('error', onError(socket));
};
