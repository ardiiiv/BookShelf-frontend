<script setup>
const props = defineProps({
    showAction:{
        type: Boolean,
        default: true,
    }
})
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
                            <button class="px-2 py-1 rounded-lg shadow-md">
                                <v-icon name="la-trash-alt" scale="1.6" />
                            </button>
                            <button class="px-2 py-1 rounded-lg shadow-md">
                                <v-icon name="la-check-solid" scale="1.6" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>