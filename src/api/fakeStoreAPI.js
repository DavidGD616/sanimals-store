import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1';


// Products
export const fetchProducts = async (offset, limit) => {
    try {
      const response = await axios.get(`${BASE_URL}/products`, {
        params: {
          offset: offset,
          limit: limit
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching products: ', error);
      throw error;
    }
  };

// Single Product
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
}

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}