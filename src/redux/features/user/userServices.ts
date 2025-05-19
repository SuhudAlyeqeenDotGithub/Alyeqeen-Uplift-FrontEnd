import axios from "axios";

const signUpURI = "http://localhost:5000/api/users/signup";
const loginURI = "http://localhost:5000/api/users/login";

interface signUpData {
  userName: string;
  userEmail: string;
  password: string;
  confirmPassword: string;
}
interface loginData {
  userEmail: string;
  password: string;
}

const loginUser = async (userData: loginData) => {
  try {
    const response = await axios.post(loginURI, userData, { withCredentials: true });
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    const typedError = error as any;
    throw new Error(typedError.response?.data.message || typedError.message);
  }
};
const signUpUser = async (userData: signUpData) => {
  try {
    const response = await axios.post(signUpURI, userData, { withCredentials: true });

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    const typedError = error as any;
    throw new Error(typedError.response?.data.message || typedError.message);
  }
};

export { loginUser, signUpUser };
export type { loginData, signUpData };
