<script setup>
import ModalConfirm from '@/components/modal/ModalConfirm.vue'
import ModalInfo from '@/components/modal/ModalInfo.vue'
import { ref } from 'vue'
const props = defineProps({
    showAction:{
        type: Boolean,
        default: true,
    }
})

const showModalInfo = ref(false)
const showModalConfirm = ref(false)
</script>

<template>
    <div class="w-full h-full md:p-4 p-0">
        <div class="overflow-auto rounded-xl shadow-PrimaryShadow">
            <table class="table-auto w-full">
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
                    <tr>
                        <td class="py-3 px-4">1</td>
                        <td class="py-3 px-4">Judul 2</td>
                        <td class="py-3 px-4">Penulis 2</td>
                        <td class="py-3 px-4">
                            <span class="bg-red-100 text-red-700 px-2 py-1 text-sm rounded">Belum Dibaca</span>
                        </td>
                        <td v-if="props.showAction" class="py-3 px-4 flex gap-2 justify-center">
                            <button @click="showModalInfo = true" class="px-2 py-1 rounded-lg shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                <v-icon name="la-check-solid" scale="1.6" />
                            </button>
                            <button @click="showModalConfirm = true" class="px-2 py-1 rounded-lg shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                <v-icon name="la-trash-alt" scale="1.6" />
                            </button>
                            <ModalInfo :show="showModalInfo" @close="showModalInfo = false">
                                <p>Buku berhasil ditambahkan ke rak sudah dibaca.</p>
                            </ModalInfo>
                            <ModalConfirm :show="showModalConfirm" @close="showModalConfirm = false">
                                <p>Apakah Anda yakin ingin menghapus buku ini?</p>
                            </ModalConfirm>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>