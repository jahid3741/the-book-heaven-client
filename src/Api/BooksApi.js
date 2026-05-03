import axios from "axios";


const API_URL = "http://localhost:3000";

export const getLatestBooks = async () => {
  const res = await axios.get(`${API_URL}/books`);
  return res.data;
};
export const getAllBooks = async () => {
  const res = await axios.get(`${API_URL}/books`);
  return res.data;
};

export const getBookById = async (id) => {
  const res = await axios.get(`${API_URL}/books/${id}`);
  return res.data;
};

export const addBook = async (bookData) => {
  const res = await axios.post(`${API_URL}/books`, bookData);
  return res.data;
};

export const updateBook = async (id, updatedData) => {
  const res = await axios.put(`${API_URL}/books/${id}`, updatedData);
  return res.data;
};

export const deleteBook = async (id) => {
  const res = await axios.delete(`${API_URL}/books/${id}`);
  return res.data;
};
