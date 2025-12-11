import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import { PORT } from './config/serverConfig.js';
import Router from './router/index.js';
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/api', Router);

app.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
