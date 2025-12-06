import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/services/api'

export const useBookStore = defineStore('book', () => {
  const books = ref([])
  const selectedBook = ref(null)
  const loading = ref(false)

  const fetchBooks = async () => {
    loading.value = true
    try {
      const res = await api.get('/books')
      books.value = res.data
    } finally {
      loading.value = false
    }
  }

  const fetchBookById = async (id) => {
    loading.value = true
    try {
      const res = await api.get(`/books/${id}`)
      selectedBook.value = res.data
    } finally {
      loading.value = false
    }
  }

  return {
    books,
    selectedBook,
    loading,
    fetchBooks,
    fetchBookById
  }
})
