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


export const addUserToRoomDB = async (roomID, username, socketID) => {
  const text = `INSERT INTO rooms (username, room_id, socket_id) VALUES ('${username}', '${roomID}', '${socketID}') ON CONFLICT (username)
    DO UPDATE SET socket_id='${socketID}'`;
  return db.query(text);
}

export const removeUserFromRoomDB = async (socketID) => {
  const text = `DELETE FROM rooms WHERE socket_id='${socketID}'`;
  return db.query(text);
}

export const saveCodeToDB = async (roomID, code) => {
  console.log(code);
  const text = `INSERT INTO code (room_id, code) VALUES ('${roomID}', '${code}') ON CONFLICT (room_id) 
    DO UPDATE SET code= '${code}';`;
  return db.query(text);
}