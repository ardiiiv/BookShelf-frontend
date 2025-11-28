<script setup>
import TableUncompleted from '@/layouts/TableUncompleted.vue';
import SideBar from '@/layouts/SideBar.vue';
</script>

<template>
<div class="w-screen  min-h-screen grid grid-cols-6 grid-rows-5 overflow-hidden">
    <div class="col-span-1 row-span-5 bg-gradient-to-b from-10% from-Primary via-50% via-Secondary to-90% to-[#85182A] md:p-4 p-6 h-full w-full ">
        <SideBar/>  
    </div>
    <div class="col-span-5 row-span-5 w-full h-full p-2">
        <div class="px-4"><h1 class="text-3xl md:text-5xl font-Playfair font-semibold text-Primary">Belum Dibaca</h1></div>
        <div class="mt-4">
            <TableUncompleted/>
        </div>
    </div>
</div>
</template>