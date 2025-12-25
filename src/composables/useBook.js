import { ref } from "vue";
import { bookService } from "@/services/bookServices.js";

export function useBooks() {
  const books = ref([]);
  const selectedBook = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // ============================
  // Fetch all books
  // ============================
  async function fetchBooks() {
    try {
      loading.value = true;
      error.value = null;

      const res = await bookService.getBooks();
      books.value = res.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Gagal mengambil data buku";
    } finally {
      loading.value = false;
    }
  }

  // ============================
  // Get single book by ID
  // ============================
  async function getBook(id) {
    try {
      loading.value = true;
      error.value = null;

      const res = await bookService.getBookById(id);
      selectedBook.value = res.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Gagal mengambil detail buku";
    } finally {
      loading.value = false;
    }
  }

  // ============================
  // Create new book
  // ============================
  async function createBook(payload) {
    try {
      loading.value = true;
      error.value = null;

      const res = await bookService.createBook(payload);

      // tambahkan ke list tanpa fetch ulang
      books.value.push(res.data);

      return res.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Gagal menambah buku";
    } finally {
      loading.value = false;
    }
  }

  // ============================
  // Update book
  // ============================
  async function updateBook(id, payload) {
    try {
      loading.value = true;
      error.value = null;

      const res = await bookService.updateBook(id, payload);

      // update data di state
      const index = books.value.findIndex((b) => b.id === id);

      if (index !== -1) {
        books.value[index] = res.data;
      }

      return res.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Gagal memperbarui buku";
      throw err;
    } finally {
      loading.value = false;
    }
  }

  // ============================
  // Delete book
  // ============================
  async function deleteBook(id) {
    try {
      loading.value = true;
      error.value = null;

      await bookService.deleteBook(id);

      // remove dari state tanpa GET ulang
      books.value = books.value.filter((b) => b.id !== id);

      return true;
    } catch (err) {
      error.value = err.response?.data?.message || "Gagal menghapus buku";
      throw err;
    } finally {
      loading.value = false;
    }
  }

  return {
    books,
    selectedBook,
    loading,
    error,
    fetchBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
  };
}
