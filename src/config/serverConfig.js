/* eslint-env node */
import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 5000;
export const VITE_CMD = process.env.VITE_CMD;
