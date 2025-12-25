<script setup>
import ModalConfirm from '@/components/modal/ModalConfirm.vue'
import ModalInfo from '@/components/modal/ModalInfo.vue'
import { ref, computed, onMounted } from 'vue';
import { useBooks } from '@/composables/useBook';

const props = defineProps({
    showAction:{
        type: Boolean,
        default: true,
    }
})

const showModalInfo = ref(false)
const showModalConfirm = ref(false)
const bookToDelete = ref(null);
const infoMessage = ref("")

const { books, loading, error, fetchBooks, updateBook, deleteBook } = useBooks();

const readBooks = computed(() => {
    return books.value.filter(book => book.isRead === false)
});

onMounted(() => {
    fetchBooks();
});

async function handleCompleteBook(book) {
    try {
        await updateBook(book._id, { isRead: true });
        infoMessage.value = 'Buku berhasil dikembalikan ke rak sudah dibaca.';
        showModalInfo.value = true;
        fetchBooks()
    } catch (error) {
        console.error("error complete book :", error);
        infoMessage.value = "Gagal menambahkan di rak buku sudah selesai dibaca.";
        showModalInfo.value = true;
    }
};

async function handleDeleteBook() {
    if (!bookToDelete.value) {
        console.error("Tidak ada buku yang dipilih untuk dihapus");
        return
    }

    try {
        const bookId = bookToDelete.value._id;

        await deleteBook(bookId);

        infoMessage.value = 'Buku berhasil dihapus.';
        showModalConfirm.value = false;
        bookToDelete.value = null;
        await fetchBooks();
    } catch (error) {
        console.error('Error saat menghapus:', error);
        infoMessage.value = 'Gagal menghapus buku.';
        showModalConfirm.value = false;
        bookToDelete.value = null;
    }
};

function confirmDelete(book) {
    bookToDelete.value = book
    showModalConfirm.value = true
}

function handleCancelDelete() {
    showModalConfirm.value = false
    bookToDelete.value = null
}
</script>

<template>
    <div class="w-full h-full md:p-4 p-0">
        <div class="overflow-auto rounded-xl shadow-PrimaryShadow">
            <!-- Loading state -->
            <div v-if="loading" class="text-center py-8">
                <p>Memuat data...</p>
            </div>
            <!-- Error state -->
            <div v-else-if="error" class="text-center py-8 text-red-600">
                <p>{{ error }}</p>
            </div>
            <table v-else class="table-auto w-full">
                <thead class="bg-slate-400 text-white border-b">
                    <tr>
                        <th class="py-3 px-4 font-semibold">No</th>
                        <th class="py-3 px-4 font-semibold">Judul</th>
                        <th class="py-3 px-4 font-semibold">Penulis</th>
                        <th class="py-3 px-4 font-semibold">Status</th>
                        <th v-if="props.showAction" class="py-3 px-4 font-semibold">Aksi</th>
                    </tr>
                </thead>
                <tbody class="divide-y text-center font-medium">
                    <tr v-for="(book, index) in readBooks" :key="book.id">
                        <td class="py-3 px-4">{{ index + 1 }}</td>
                        <td class="py-3 px-4">{{ book.title }}</td>
                        <td class="py-3 px-4">{{ book.author }}</td>
                        <td class="py-3 px-4">
                            <span class="bg-red-100 text-red-700 px-2 py-1 text-sm rounded">Belum Dibaca</span>
                        </td>
                        <td v-if="props.showAction" class="py-3 px-4 flex gap-2 justify-center">
                            <button @click="handleCompleteBook(book)" class="px-2 py-1 rounded-lg shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                <v-icon name="la-check-solid" scale="1.6" />
                            </button>
                            <button @click="confirmDelete(book)" class="px-2 py-1 rounded-lg shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                <v-icon name="la-trash-alt" scale="1.6" />
                            </button>
                        </td>
                    </tr>
                    <!-- Empty state -->
                    <tr v-if="readBooks.length === 0">
                        <td :colspan="props.showAction ? 5 : 4" class="py-8 text-gray-500">
                            Tidak ada buku yang sudah dibaca
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ModalInfo :show="showModalInfo" @close="showModalInfo = false">
            <p>Buku berhasil ditambahkan ke rak sudah dibaca.</p>
        </ModalInfo>
        <ModalConfirm :show="showModalConfirm" @close="handleCancelDelete" @confirm="handleDeleteBook">
            <p>Apakah Anda yakin ingin menghapus buku "{{ bookToDelete?.title }}"?</p>
        </ModalConfirm>
    </div>
</template>