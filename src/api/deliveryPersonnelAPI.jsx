import axiosInstance from "./axiosInstance";

export const addDeliveryPersonnel = async (credentials,deliveryPersonnelId) => {
  try {
    const response = await axiosInstance.POST(`/deliveryPersonnel/add-deliveryPersonnel/${deliveryPersonnelId}`, credentials,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};
export const deleteDeliveryPersonnel = async (deliveryPersonnelId) => {
  try {
    const response = await axiosInstance.DELETE(`/deliveryPersonnel/delete-deliveryPersonnel/${deliveryPersonnelId}`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};
export const editDeliveryPersonnel = async (credentials,deliveryPersonnelId) => {
  try {
    const response = await axiosInstance.PUT(`/deliveryPersonnel/edit-deliveryPersonnel/${deliveryPersonnelId}`, credentials,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};
export const deliveryPersonnel = async (id) => {
  try {
    const response = await axiosInstance.GET(`deliveryPersonnel/deliveryPersonnels/${id}`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};
export const deliveryPersonnels = async () => {
  try {
    const response = await axiosInstance.GET(`deliveryPersonnel/deliveryPersonnels/`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};
export const addAssignOrder = async (assignOrderId,data) => {
  try {
    const response = await axiosInstance.POST(`deliveryPersonnel/${assignOrderId}/add-assignOrder`, data,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};
export const deleteAssignOrder = async (assignOrderId) => {
  try {
    const response = await axiosInstance.DELETE(`deliveryPersonnel/${assignOrderId}/delete-assignOrder`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};
export const editAssignOrder = async (assignOrderId,data) => {
  try {
    const response = await axiosInstance.PUT(`deliveryPersonnel/${assignOrderId}/edit-assignOrder`,data,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};
export const editStatus = async (assignOrderId,data) => {
  try {
    const response = await axiosInstance.PUT(`deliveryPersonnel/${assignOrderId}/status-order`,data,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};
