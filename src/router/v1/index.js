import express from 'express';

import { pingCheck } from '../../controllers/pingController.js';
const Router = express.Router();
Router.get('/ping', pingCheck);
export default Router;
