import { createProjectService } from '../service/projectService.js';

export const createProjectController = async (req,res) => {
  const projectId = await createProjectService();
  return res.json({
    sucess: true,
    message: 'Project created',
    data: projectId,
  });
};
