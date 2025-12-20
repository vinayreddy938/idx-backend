import express from 'express';

import { createProjectController, getProjectController } from '../../controllers/projectController.js';
import { getProjectStructure } from '../../service/projectService.js';
const Router = express.Router();

Router.post('/', createProjectController);
Router.get("/:projectId",getProjectController);
export default Router;
