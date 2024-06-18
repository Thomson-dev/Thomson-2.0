import axios from "axios";

const URL = "http://localhost:5000/api/user/login";

const login = async (userData: string) => {
  const response = await axios.post(URL , userData);

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


export default authService