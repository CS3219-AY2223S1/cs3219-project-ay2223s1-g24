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


export const addUserToRoomDB = async (roomID, username, difficulty, firstQuestion, secondQuestion) => {
  const createCode = `INSERT INTO code (room_id) VALUES ('${roomID}') ON CONFLICT (room_id)
    DO NOTHING`;
  await db.query(createCode);
  const text = `INSERT INTO 
    rooms (username, room_id, difficulty, first_question, second_question) 
    VALUES ('${username}', '${roomID}', '${difficulty}', ${firstQuestion}, ${secondQuestion}) ON CONFLICT (username)
    DO NOTHING`;
  return db.query(text);
}

export const retrieveRoomDataFromDB = async (username, socketID) => {
  const text = `SELECT room_id, difficulty, first_question, second_question FROM rooms WHERE username='${username}'`;
  const res = await db.query(text);
  return res.rows[0];
}

export const removeUserFromRoomDB = async (username) => {
  const text = `DELETE FROM rooms WHERE username='${username}'`;
  return db.query(text);
}

export const saveCodeToDB = async (roomID, code) => {
  const text = `INSERT INTO code (room_id, code) VALUES ('${roomID}', '${code}') ON CONFLICT (room_id) 
    DO UPDATE SET code= '${code}';`;
  return db.query(text);
}

export const deleteRoomInDB = async (roomID) => {
  const text = `DELETE FROM code WHERE room_id='${roomID}'`;
  return db.query(text);
}

export const retrieveCodeFromDB = async (roomID) => {
  const text = `SELECT code FROM code WHERE room_id='${roomID}'`;
  const res = await db.query(text);
  return res.rows[0].code;
}