import { defineStore } from "pinia";
import { bookService } from "@/services/bookServices.js";

export const useBookStore = defineStore("book", {
  
  // STATE
  
  state: () => ({
    books: [],
    selectedBook: null,
    loading: false,
    error: null,
  }),

  
  // GETTERS 
  
  getters: {
    hasBooks: (state) => state.books.length > 0,
    readBook: (state) => state.books.filter(book => book.isRead === true),
    UnReadBook: (state) => state.books.filter(book => book.isRead === false),
  },

  
  // ACTIONS
  
  actions: {
    // ===== Fetch all books =====
    async fetchBooks() {
      try {
        this.loading = true;
        this.error = null;

        const res = await bookService.getBooks();
        this.books = res.data;
      } catch (err) {
        this.error =
          err.response?.data?.message || "Gagal mengambil data buku";
      } finally {
        this.loading = false;
      }
    },

    // ===== Get book by ID =====
    async getBook(id) {
      try {
        this.loading = true;
        this.error = null;

        const res = await bookService.getBookById(id);
        this.selectedBook = res.data;
      } catch (err) {
        this.error =
          err.response?.data?.message || "Gagal mengambil detail buku";
      } finally {
        this.loading = false;
      }
    },

    // ===== Create book =====
    async createBook(payload) {
      try {
        this.loading = true;
        this.error = null;

        const res = await bookService.createBook(payload);

        // push tanpa fetch ulang
        this.books.push(res.data);

        return res.data;
      } catch (err) {
        this.error =
          err.response?.data?.message || "Gagal menambah buku";
        return null;
      } finally {
        this.loading = false;
      }
    },

    // ===== Update book =====
    async updateBook(id, payload) {
      try {
        this.loading = true;
        this.error = null;

        const res = await bookService.updateBook(id, payload);

        const index = this.books.findIndex((b) => b.id === id);
        if (index !== -1) {
          this.books[index] = res.data;
        }

        // update selectedBook kalau lagi dibuka
        if (this.selectedBook?.id === id) {
          this.selectedBook = res.data;
        }

        return res.data;
      } catch (err) {
        this.error =
          err.response?.data?.message || "Gagal memperbarui buku";
        return null;
      } finally {
        this.loading = false;
      }
    },

    // ===== Delete book =====
    async deleteBook(id) {
      try {
        this.loading = true;
        this.error = null;

        await bookService.deleteBook(id);

        this.books = this.books.filter((b) => b.id !== id);

        if (this.selectedBook?.id === id) {
          this.selectedBook = null;
        }

        return true;
      } catch (err) {
        this.error =
          err.response?.data?.message || "Gagal menghapus buku";
        return false;
      } finally {
        this.loading = false;
      }
    },

    // ===== Reset state =====
    reset() {
      this.books = [];
      this.selectedBook = null;
      this.error = null;
    },
  },
});
