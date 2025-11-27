<script setup>
import SideBar from "@/layouts/SideBar.vue";
</script>

<template>
    <div class="w-screen h-screen grid grid-cols-5 grid-rows-4">
        <div class="col-span-1 row-span-4 bg-gradient-to-b from-10% from-Primary via-50% via-Secondary to-90% to-[#85182A] md:p-4 p-6">
            <SideBar/>  
        </div>
        <div class="col-span-4 row-span-4 bg-white">
            <div>
                
            </div>
        </div>
    </div>
</template>