<script setup>
import ModalConfirm from '@/components/modal/ModalConfirm.vue';
import ModalInfo from '@/components/modal/ModalInfo.vue';
import { ref, computed, onMounted } from 'vue';
import { useBooks } from '@/composables/useBook';

const props = defineProps({
    showActions:{
        type: Boolean,
        default: true,
    },
})

const showModalInfo = ref(false)
const showModalConfirm = ref(false)
const bookToDelete = ref(null);
const infoMessage = ref("")

const { books, loading, error, fetchBooks, updateBook, deleteBook } = useBooks();

const readBooks = computed(() => {
    return books.value.filter(book => book.isRead === true)
});

onMounted(() => {
    fetchBooks();
});

async function handleReturnBook(book) {
    try {
        await updateBook(book._id, { isRead: false });
        infoMessage.value = "'Buku berhasil dikembalikan ke rak belum dibaca.";
        showModalInfo.value = true;
        fetchBooks()
    } catch (error) {
        console.error("error return book:", error);
        infoMessage.value = "Gagal menambahkan di rak buku sudah belum dibaca."
    }
};

async function handleDeleteBook(book) {
    if (!bookToDelete.value) {
        console.error("Tidak ada buku yang dipilih untuk dihapus");
        return
    }

    try {
        const bookId = bookToDelete.value._id;

        console.log("Menghapus buku dengan ID:", bookId);
        
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
}
function confirmDelete(book) {
    console.log("Buku yang akan dihapus:", book);
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
        <div class="w-full overflow-auto rounded-xl shadow-PrimaryShadow">
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
                        <th v-if="props.showActions" class="py-3 px-4 font-semibold">Aksi</th>
                    </tr>
                </thead>
                <tbody class="divide-y text-center font-medium">
                    <tr v-for="(book, index) in readBooks" :key="book.id">
                        <td class="py-3 px-4">{{ index + 1 }}</td>
                        <td class="py-3 px-4">{{ book.title }}</td>
                        <td class="py-3 px-4">{{ book.author }}</td>
                        <td class="py-3 px-4">
                            <span class="bg-green-100 text-green-700 px-2 py-1 text-sm rounded">Sudah Dibaca</span>
                        </td>
                        <td v-if="props.showActions" class="flex gap-2 py-3 px-4 justify-center">
                            <button @click="handleReturnBook(book)" class="px-2 py-1 rounded-lg shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                <v-icon name="la-undo-alt-solid" scale="1.6"/>
                            </button>
                            <button @click="confirmDelete(book)" class="px-2 py-1 rounded-lg shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                <v-icon name="la-trash-alt" scale="1.6"/>
                            </button>
                        </td>
                    </tr>
                    <!-- Empty state -->
                    <tr v-if="readBooks.length === 0">
                        <td :colspan="props.showActions ? 5 : 4" class="py-8 text-gray-500">
                            Tidak ada buku yang sudah dibaca
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ModalInfo :show="showModalInfo" @close="showModalInfo = false">
            <p>Buku berhasil dikembalikan ke rak belum dibaca.</p>
        </ModalInfo>
        <ModalConfirm :show="showModalConfirm" @close="handleCancelDelete" @confirm="handleDeleteBook">
            <p>Apakah Anda yakin ingin menghapus buku ini "{{ bookToDelete?.title }}"?</p>
        </ModalConfirm>
    </div>
</template>