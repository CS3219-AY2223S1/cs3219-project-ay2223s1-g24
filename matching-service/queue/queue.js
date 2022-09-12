var queue = [];

export const addUserToQueue = (socketId, io) => {
  queue.push(socketId);
  console.log(queue);
  if (queue.length >= 2) {
    const firstUser = queue.pop();
    io.to(firstUser).emit("matched");
    const secondUser = queue.pop();
    io.to(secondUser).emit("matched");
  }
}


export const deleteUserFromQueue = (socketId) => {
  var newQueue = [];
  while (queue.length > 0) {
    var id = queue.pop();
    if (id === socketId) continue;
    newQueue.push(id);
  }
  queue = newQueue;
  console.log(queue);
}