import axios from "axios"


const getexperience = async ()=>{

    const getExperience = axios.get("http://localhost:5000/api/experience")

    return getExperience;
}

const experienceService = { getexperience }

export default experienceService;