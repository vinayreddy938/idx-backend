import express from 'express';

import { createProjectController } from '../../controllers/projectController.js';
const Router = express.Router();

Router.post('/', createProjectController);
export default Router;
