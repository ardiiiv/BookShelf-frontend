<script setup>
const props = defineProps({
    showActions:{
        type: Boolean,
        default: true,
    }
})
</script>

<template>
    <div class="w-full h-full md:p-4 p-0">
        <div class="w-full overflow-auto rounded-xl shadow-PrimaryShadow">
            <table class="table-auto w-full">
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
                    <tr>
                        <td class="py-3 px-4">1</td>
                        <td class="py-3 px-4">Judul 1</td>
                        <td class="py-3 px-4">Penulis 1</td>
                        <td class="py-3 px-4">
                            <span class="bg-green-100 text-green-700 px-2 py-1 text-sm rounded">Sudah Dibaca</span>
                        </td>
                        <td v-if="props.showActions" class="flex gap-2 py-3 px-4 justify-center">
                            <button class="px-2 py-1 rounded-lg shadow-md">
                                <v-icon name="la-undo-alt-solid" scale="1.6"/>
                            </button>
                            <button class="px-2 py-1 rounded-lg shadow-md ">
                                <v-icon name="la-trash-alt" scale="1.6"/>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>