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


export const addUserToRoomDB = async (roomID, username, difficulty, firstQuestion, secondQuestion, socketID) => {
  const text = `INSERT INTO 
    rooms (username, room_id, difficulty, first_question, second_question, socket_id) 
    VALUES ('${username}', '${roomID}', '${difficulty}', ${firstQuestion}, ${secondQuestion}, '${socketID}') ON CONFLICT (username)
    DO UPDATE SET socket_id='${socketID}'`;
  return db.query(text);
}

export const removeUserFromRoomDB = async (socketID) => {
  const text = `DELETE FROM rooms WHERE socket_id='${socketID}'`;
  return db.query(text);
}

export const saveCodeToDB = async (roomID, code) => {
  const text = `INSERT INTO code (room_id, code) VALUES ('${roomID}', '${code}') ON CONFLICT (room_id) 
    DO UPDATE SET code= '${code}';`;
  return db.query(text);
}

export const retrieveCodeFromDB = async (roomID) => {
  const text = `SELECT code FROM code where room_id='${roomID}'`;
  const res = await db.query(text);
  return res.rows[0].code;
}