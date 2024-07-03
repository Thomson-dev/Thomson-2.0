import axios from "axios"


const getexperience = async ()=>{

    const getExperience = axios.get("http://localhost:5000/api/experience")

    return getExperience;
}
 //@ts-ignore
const createExperience = async (experienceData) => {

    const createExperience = axios.post("http://localhost:5000/api/experience",experienceData)

    return createExperience;
}


const experienceService = { getexperience, createExperience }

export default experienceService;