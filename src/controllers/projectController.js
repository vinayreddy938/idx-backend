import { createProjectService, getProjectStructure } from '../service/projectService.js';

export const createProjectController = async (req,res) => {
  const projectId = await createProjectService();
  return res.json({
    sucess: true,
    message: 'Project created',
    data: projectId,
  });
};
export const getProjectController = async(req,res)=>{
  const tree = await getProjectStructure(req.params.projectId);
  return res.status(200).json({
    data:tree,
    sucess:true,
    message:"sucessfu;;y fetched the tree"
  })
}
