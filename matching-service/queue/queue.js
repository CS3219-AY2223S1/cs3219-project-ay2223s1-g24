import { getUsersInDB, addUserToDB, deleteUserfromDB, deleteUserPairFromDB } from "../db/db.js";
import { v4 as uuidv4 } from 'uuid'

export const addUserToQueue = async (socketId, username, difficulty, io) => {
  // add user to db
  await addUserToDB(socketId, username, difficulty);
  // check users in db
  const res = await getUsersInDB(difficulty);
  const users = res.rows;

  // match users in db
  if (users.length >= 2) {
    const firstUser = users[0].socket_id;
    const secondUser = users[1].socket_id;
    deleteUserPairFromDB(firstUser, secondUser).then(() => {
      const roomID = uuidv4();
      const firstHash = Math.floor(Math.random() * 1000000);
      const secondHash = Math.floor(Math.random() * 1000000);
      io.to(firstUser).to(secondUser).emit("MATCHED", roomID, firstHash, secondHash);
    })
    console.log("MATCHED >> " + firstUser + " and " + secondUser + " matched");
  }
}

export const deleteUserFromQueue = async (socketId) => {
  await deleteUserfromDB(socketId);
}

