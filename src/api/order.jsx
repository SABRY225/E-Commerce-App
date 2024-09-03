import axiosInstance from "./axiosInstance";

export const createOrder = async () => {
  try {
    const response = await axiosInstance.POST("/order/create-order",{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};
export const editOrder = async (id,data) => {
  try {
    const response = await axiosInstance.PUT(`/order/edit-order/${id}`,data,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};
export const deleteOrder = async (id) => {
  try {
    const response = await axiosInstance.DELETE(`/order/delete-order/${id}`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getOrder = async (id) => {
  try {
    const response = await axiosInstance.GET(`/order/order/${id}`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getOrders = async () => {
  try {
    const response = await axiosInstance.GET(`/order/orders`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};