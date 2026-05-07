import api from "./axios";

export const getLatestBooks = async () => {
  const res = await api.get("/books");
  return res.data;
};

export const getAllBooks = async () => {
  const res = await api.get("/books");
  return res.data;
};

export const getBookById = async (id) => {
  const res = await api.get(`/books/${id}`);
  return res.data;
};

export const addBook = async (bookData) => {
  const res = await api.post("/books", bookData);
  return res.data;
};

export const updateBook = async (id, updatedData) => {
  const res = await api.put(`/books/${id}`, updatedData);
  return res.data;
};

export const deleteBook = async (id) => {
  const res = await api.delete(`/books/${id}`);
  return res.data;
};
