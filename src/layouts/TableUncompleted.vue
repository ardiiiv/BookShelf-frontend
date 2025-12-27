<script setup>
import ModalConfirm from '@/components/modal/ModalConfirm.vue'
import ModalInfo from '@/components/modal/ModalInfo.vue'
import { ref, computed, onMounted } from 'vue';
import { useBookStore } from '@/store/book';
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

const bookStore = useBookStore();
onMounted(() => bookStore.fetchBooks());

const unReadBook = computed(() => bookStore.UnReadBook)

const handleComplete = async (book) => {
    await bookStore.updateBook(book._id, { isRead: true });
    showModalInfo.value = true;
    bookStore.fetchBooks();
}

const confirmDelete = (book) => {
    bookToDelete.value = book;
    showModalConfirm.value = true;
}

const handDelete = async () => {
    if (!bookToDelete.value) return;

    await bookStore.deleteBook(bookToDelete.value.id);
    showModalConfirm.value = false;
    bookToDelete.value = null;
    bookStore.fetchBooks();
}
</script>

<template>
    <div class="w-full h-full md:p-4 p-0">
        <div class="overflow-auto rounded-xl shadow-PrimaryShadow">
            <!-- Loading state -->
            <div v-if="bookStore.loading" class="text-center py-8">
                <p>Memuat data...</p>
            </div>
            <!-- Error state -->
            <div v-else-if="bookStore.error" class="text-center py-8 text-red-600">
                <p>{{ bookStore.error }}</p>
            </div>
            <table v-else class="table-auto w-full">
                <thead class="bg-slate-400 text-white border-b">
                    <tr>
                        <th class="py-3 px-4 font-semibold">No</th>
                        <th class="py-3 px-4 font-semibold">Judul</th>
                        <th class="py-3 px-4 font-semibold">Penulis</th>
                        <th class="py-3 px-4 font-semibold">Year</th>
                        <th class="py-3 px-4 font-semibold">Status</th>
                        <th v-if="props.showAction" class="py-3 px-4 font-semibold">Aksi</th>
                    </tr>
                </thead>
                <tbody class="divide-y text-center font-medium">
                    <tr v-for="(book, index) in unReadBook" :key="book.id">
                        <td class="py-3 px-4">{{ index + 1 }}</td>
                        <td class="py-3 px-4">{{ book.title }}</td>
                        <td class="py-3 px-4">{{ book.author }}</td>
                        <td class="py-3 px-4">{{ book.year }}</td>
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
                    <tr v-if="unReadBook.length === 0">
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
        <ModalConfirm :show="showModalConfirm" @close="showModalConfirm = false" @confirm="handDelete">
            <p>Apakah Anda yakin ingin menghapus buku "{{ bookToDelete?.title }}"?</p>
        </ModalConfirm>
    </div>
</template>