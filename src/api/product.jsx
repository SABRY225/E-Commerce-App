 import axiosInstance from "./axiosInstance";

export const createProduct = async (id,data) => {
    try {
      const response = await axiosInstance.POST(`/product/${id}/create-product`,data,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };
export const editProduct = async (id,data) => {
    try {
      const response = await axiosInstance.PUT(`/product/edit-product/${id}`,data,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };
export const deleteProduct = async (id) => {
    try {
      const response = await axiosInstance.PUT(`/product/delete-product/${id}`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };
export const getsingleProduct = async (id) => {
    try {
      const response = await axiosInstance.PUT(`/product//singleproduct/${id}`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };
export const getProducts = async () => {
    try {
      const response = await axiosInstance.PUT(`/product//products`,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };