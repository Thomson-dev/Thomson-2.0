import axios from "axios";

const getproject = async () => {
  const getProject = axios.get("https://thomsonserver.onrender.com/api/project");

  return getProject;
};
    //@ts-ignore
const createProject = async (projectData) => {
  const createProject = axios.post(
    "https://thomsonserver.onrender.com/api/project",
    projectData
  );

  return createProject;
};

const projectService = { getproject, createProject };

export default projectService;
