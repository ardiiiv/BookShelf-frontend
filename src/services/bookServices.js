import api from "@/api/api";

export const bookService = {
  getBooks() {
    return api.get("/books");
  },

  getBookById(id) {
    return api.get(`/books/${id}`);
  },

  createBook(payload) {
    return api.post("/books", payload);
  },

  updateBook(id, payload) {
    return api.put(`/books/${id}`, payload);
  },

  deleteBook(id) {
    return api.delete(`/books/${id}`);
  },
};
