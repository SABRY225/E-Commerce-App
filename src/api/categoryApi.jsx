import axiosInstance from "./axiosInstance";

export const createCategory = async (categoryName) => {
  try {
    const response = await axiosInstance.post("category/create-category", categoryName,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
    return response.data;
  } catch (error) {
    return error;
  }
};

export const editCategory = async (categoryName,categoryId ) => {
    try {
      const response = await axiosInstance.put(`category/edit-category/${categoryId} `, categoryName,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };

  export const deleteCategory = async (categoryId ) => {
    try {
      const response = await axiosInstance.delete(`category/delete-category/${categoryId} `, categoryName,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const getCategory = async (categoryId ) => {
    try {
      const response = await axiosInstance.get(`category/category/${categoryId} `, categoryName,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const getCategories = async () => {
    try {
      const response = await axiosInstance.put(`category/all-Categories`, categoryName,{headers:{"Content-Type" : "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`}});
      return response.data;
    } catch (error) {
      return error;
    }
  };