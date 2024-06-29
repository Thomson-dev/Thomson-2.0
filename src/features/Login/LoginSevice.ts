import axios from "axios";
import { User } from "./LoginSlice";

const URL = "http://localhost:5000/api/user/login";

const login = async (userData: User) => {
  const response = await axios.post(URL, userData);
  console.log(response);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;
