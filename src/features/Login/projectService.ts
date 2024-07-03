import axios from "axios";

const getproject = async () => {
  const getProject = axios.get("http://localhost:5000/api/project");

  return getProject;
};
    //@ts-ignore
const createProject = async (projectData) => {
  const createProject = axios.post(
    "http://localhost:5000/api/project",
    projectData
  );

  return createProject;
};

const projectService = { getproject, createProject };

export default projectService;
