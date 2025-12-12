import { exec } from 'child_process';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

import { VITE_CMD } from '../config/serverConfig.js';

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
