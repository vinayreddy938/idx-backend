import express from 'express';

import { pingCheck } from '../../controllers/pingController.js';
import projectRouter from './project.js';
const Router = express.Router();
Router.get('/ping', pingCheck);
Router.use('/', projectRouter);
export default Router;
