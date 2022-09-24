import * as pg from 'pg';
const { Pool } = pg.default;
import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
  host: process.env.HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS,
};

const db = new Pool(dbConfig);


export const addUserToDB = async (socketId, username, difficulty) => {
  const findUser = `SELECT * FROM matching_queue WHERE username='${username}';`;
  console.log(difficulty);
  const res = await db.query(findUser);
  if (res.rows.length > 0) {
    console.log("User already in queue!");
    return;
  }
  const text = `INSERT INTO matching_queue (socket_id, username, difficulty) VALUES ('${socketId}', '${username}', '${difficulty}')`;
  return db.query(text);
}

export const getUsersInDB = async (difficulty) => {
  const text = `SELECT * FROM matching_queue WHERE difficulty='${difficulty}' ORDER BY joined_at`;
  return db.query(text);
}

export const deleteUserfromDB = async (socketId) => {
  const text = `DELETE FROM matching_queue WHERE socket_id='${socketId}'`;
  return db.query(text);
}

export const deleteUserPairFromDB = async (firstSocket, secondSocket) => {
  const text = `DELETE FROM matching_queue WHERE socket_id='${firstSocket}' OR socket_id='${secondSocket}'`;
  return db.query(text);
}