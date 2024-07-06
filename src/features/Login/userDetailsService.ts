import axios from "axios";
import { User } from "./LoginSlice";

// const URL = "https://thomsonserver.onrender.com/api/createDetail/667aa32d2f03eeca68681713";

const user = JSON.parse(localStorage.getItem("user") || "null");

const token = user ? user.token : null;

const userDetails = async () => {
  const response = await axios.get('https://thomsonserver.onrender.com/api/createDetail/667aa32d2f03eeca68681713');

  return response.data;
};

// const updateDetails = async (userData) => {
  
//   const response = await axios.put('https://thomsonserver.onrender.com/api/createDetail/667aa32d2f03eeca68681713', userData, 
//   );
//   console.log(user);

//   return response.data;
// };
  //@ts-ignore
const updateDetails = async (userData) => {
  try {
    const response = await axios.put('https://thomsonserver.onrender.com/api/createDetail/667aa32d2f03eeca68681713', userData, {
      headers: {
        'Content-Type': 'application/json',
    
      },
    });
    
    console.log(response.data); // Log the response data
    
    return response.data;
  } catch (error) {
      //@ts-ignore
    console.error('Error updating details:', error.response ? error.response.data : error.message);
    throw error; // Re-throw the error for further handling if needed
  }
};


const userDetailsService = {
  userDetails,
  updateDetails,
};

export default userDetailsService;
