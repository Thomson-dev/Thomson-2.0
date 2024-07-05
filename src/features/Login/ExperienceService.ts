import axios from "axios"


const getexperience = async ()=>{

    const getExperience = axios.get("https://thomsonserver.onrender.com/api/experience")

    return getExperience;
}
 //@ts-ignore
const createExperience = async (experienceData) => {

    const createExperience = axios.post("https://thomsonserver.onrender.com/api/experience",experienceData)

    return createExperience;
}


const experienceService = { getexperience, createExperience }

export default experienceService;