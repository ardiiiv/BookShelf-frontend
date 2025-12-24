<script setup>
import SideBar from '@/layouts/SideBar.vue';
import InputField from '@/components/input/InputField.vue';
import MainButton from '@/components/button/MainButton.vue';
import ModalInfo from '@/components/modal/ModalInfo.vue';
import { useBooks } from '@/composables/useBook';
import { ref } from "vue";

const { createBook, loading, error } = useBooks();
const showModalInfo = ref(false);
const modalMessage = ref("");

const title = ref("");
const author = ref("");
const year = ref();
const isRead = ref(false);

const handleCreateBook = async () => {
    await createBook({
        title: title.value,
        author: author.value,
        year: Number(year.value),
        isRead: isRead.value,
    });

    if (error.value) {
        modalMessage.value = error.value;
    } else {
        modalMessage.value = "Buku berhasil ditambahkan ke rak Buku.";
        // Reset form hanya jika sukses
        title.value = "";
        author.value = "";
        year.value = "";
        isRead.value = false;
    }

    showModalInfo.value = true;
}
</script>

<template>
    <div class="w-screen  min-h-screen grid grid-cols-6 grid-rows-5 overflow-hidden">
    <div class="col-span-1 row-span-5 bg-gradient-to-b from-10% from-Primary via-50% via-Secondary to-90% to-[#85182A] md:p-4 p-6 h-full w-full ">
        <SideBar/>
    </div>
    <div class="col-span-5 row-span-5 w-full h-full p-2">
        <div class="px-4"><h1 class="text-3xl md:text-5xl font-Playfair font-semibold text-Primary">Tambah Buku</h1></div>
        <div class="md:w-3/4 w-11/12 mx-auto p-4 rounded-xl shadow-PrimaryShadow mt-10 ">
            <form @submit.prevent="handleCreateBook">
                <div class="p-4 flex flex-col">
                    <div class="p-3">
                        <h2 class="text-2xl font-medium font-Poppins text-Primary text-center">Tambahkan buku ke daftar bacaan Anda.</h2>
                    </div>
                    <InputField :title="`Judul`" :required="true" v-model="title"/>
                    <InputField :title="`Penulis`" :required="true" v-model="author"/>
                    <InputField :title="`Tahun`" :type="`number`" :required="true" v-model="year"/>
                    <div class="flex gap-2 items-center">
                        <input type="checkbox" class="md:scale-150 scale-125 accent-Primary" v-model="isRead">
                        <label class="md:text-lg text-base text-Primary font-medium font-Poppins">Sudah Dibaca</label>
                    </div>
                    <div class="self-end">
                        <MainButton :title="loading ? 'Memproses...' : 'Submit'" :disabled="loading" :type="`submit`" />
                    </div>
                </div>
            </form>
            <div>
                <ModalInfo :show="showModalInfo" @close="showModalInfo = false">
                    <p class="text-center font-Poppins">{{ modalMessage }}</p>
                </ModalInfo>
            </div>
        </div>
    </div>
</div>
</template>