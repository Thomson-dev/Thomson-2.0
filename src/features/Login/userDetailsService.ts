import axios from "axios";
import { User } from "./LoginSlice";

const URL = "https://thomsonserver.onrender.com/api/createDetail/667aa32d2f03eeca68681713";

const user = JSON.parse(localStorage.getItem("user") || "null");

const token = user ? user.token : null;

const userDetails = async () => {
  const response = await axios.get(URL);

  return response.data;
};
   //@ts-ignore
const updateDetails = async (userData) => {
  const response = await axios.put(URL, userData, 
  );
  console.log(response);

  return response.data;
};

const userDetailsService = {
  userDetails,
  updateDetails,
};

export default userDetailsService;
