import { exec } from 'child_process';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

import { VITE_CMD } from '../config/serverConfig.js';
import path from 'path';
import directoryTree from 'directory-tree';

export const createProjectService = async () => {
  try {
    const projectId = uuidv4();
    await fs.mkdir(`./projects/${projectId}`,{recursive:true});
   await exec(VITE_CMD, { cwd: `./projects/${projectId}` });
    return projectId;
  } catch (err) {
    console.log(err);
  }
};

export const getProjectStructure = async(projectId)=>{
  try{
   console.log("get project strcture")
    const projectPath = path.resolve(`./projects/${projectId}`);
    console.log(projectPath)
    const tree = await directoryTree(projectPath);
     console.log(tree)
    
    return tree;
  }catch(err){
    console.log(err);
  }
  
}
