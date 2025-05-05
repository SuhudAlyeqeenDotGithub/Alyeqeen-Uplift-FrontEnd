import axios from "axios";
import { log } from "console";

const registerURI = "http://localhost:5000/api/users/signup";
const loginURI = "http://localhost:5000/api/users/login";

interface signUpData {
  userName: string;
  userEmail: string;
  password: string;
  confirmPassword: string;
}
interface loginData {
  userName: string;
  userEmail: string;
  password: string;
  confirmPassword: string;
}

const loginUser = async (userData: signUpData) => {
  try {
    const response = await axios.post(loginURI, userData);
    return response.data;
  } catch (error) {
    const typedError = error as any;
    throw new Error(typedError.response?.data.message || typedError.message);
  }
};
const signUpUser = async (userData: loginData) => {
  try {
    const response = await axios.post(registerURI, userData);
    return response.data;
  } catch (error) {
    const typedError = error as any;
    throw new Error(typedError.response?.data.message || typedError.message);
  }
};

export { loginUser, signUpUser };
export type { loginData, signUpData };
