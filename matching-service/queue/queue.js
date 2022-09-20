import { getUsersInDB, addUserToDB, deleteUserfromDB, deleteUserPairFromDB } from "../db/db.js";

export const addUserToQueue = async (socketId, difficulty, io) => {
  // add user to db
  await addUserToDB(socketId, difficulty);
  // check users in db
  const res = await getUsersInDB(difficulty);
  const users = res.rows;

  if (users.length >= 2) {
    const firstUser = users[0].socket_id;
    const secondUser = users[1].socket_id;
    deleteUserPairFromDB(firstUser, secondUser).then(() => {
      io.to(firstUser).emit("MATCHED");
      io.to(secondUser).emit("MATCHED");
    })
    console.log(">> " + firstUser + " and " + secondUser + " matched");
  }
}

export const deleteUserFromQueue = async (socketId) => {
  await deleteUserfromDB(socketId);
}

