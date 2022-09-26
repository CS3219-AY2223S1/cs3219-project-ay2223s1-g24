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


export const addUserToRoomDB = async (username, roomID) => {
  // TODO: add checks to ensure max 2 users in each room
  const findUser = `SELECT * FROM rooms WHERE username='${username}';`;
  const res = await db.query(findUser);
  if (res.rows.length > 0) {
    console.log("User already in room!");
    return;
  }
  const text = `INSERT INTO rooms (username, room_id) VALUES ('${username}', '${roomID}')`;
  return db.query(text);
}

export const saveCodeToDB = async (roomID, code) => {
  const text = `INSERT INTO code (room_id, code) VALUES ('${roomID}', ${code}) ON CONFLICT (room_id) 
    DO UPDATE SET code= ${code};`;
  return db.query(text);
}