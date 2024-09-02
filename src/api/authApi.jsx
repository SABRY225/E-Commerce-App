import axiosInstance from "./axiosInstance";

export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post("auth/login", credentials,{headers:{"Content-Type" : "application/json"}});
    return response.data;
  } catch (error) {
    return error;
  }
};

export const register = async (credentials) => {
    try {
      const response = await axiosInstance.post("auth/register", credentials,{headers:{"Content-Type" : "application/json"}});
      return response.data;
    } catch (error) {
      return error;
    }
};

export const forgetPassword = async (credentials) => {
    try {
      const response = await axiosInstance.put("auth/forget-password", credentials,{headers:{"Content-Type" : "application/json"}});
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const sendOTP = async (email) => {
    try {
      const response = await axiosInstance.post("auth/send-otp", email,{headers:{"Content-Type" : "application/json"}});
      return response.data;
    } catch (error) {
      return error;
    }
  };
export const verifyOTP = async (credentials) => {
    try {
      const response = await axiosInstance.post("auth/verify-otp", credentials,{headers:{"Content-Type" : "application/json"}});
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const refreshToken = async (token) => {
    try {
      const response = await axiosInstance.post("auth/refresh-token", token,{headers:{"Content-Type" : "application/json"}});
      return response.data;
    } catch (error) {
      return error;
    }
  };