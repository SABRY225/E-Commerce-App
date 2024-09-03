import axiosInstance from "./axiosInstance";


export const addVehicle = async (data) => {
    try {
      const response = await axiosInstance.POST(`vehicle/add-vehicle`,data,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const deleteVehicle = async (id) => {
    try {
      const response = await axiosInstance.DELETE(`vehicle/delete-vehicle`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };
export const editVehicle = async (id,data) => {
    try {
      const response = await axiosInstance.PUT(`vehicle/edit-vehicle/${id}`,data,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };
export const getVehicle = async (id) => {
    try {
      const response = await axiosInstance.GET(`vehicle/vehicle/${id}`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };
export const getVehicles = async () => {
    try {
      const response = await axiosInstance.GET(`vehicle/vehicles`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };