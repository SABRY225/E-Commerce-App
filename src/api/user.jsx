import axiosInstance from "./axiosInstance";

export const currentUser = async () => {
    try {
      const response = await axiosInstance.GET(`/user/current-user`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };
export const editInfo = async (data) => {
    try {
      const response = await axiosInstance.PUT(`/user/edit-info`,data,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };
export const deleteInfo = async (id) => {
    try {
      const response = await axiosInstance.DELETE(`/user/delete-user/${id}`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };
export const  getUsers= async () => {
    try {
      const response = await axiosInstance.GET(`/user/user/users'`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };