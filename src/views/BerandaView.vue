<script setup>
import SideBar from "@/layouts/SideBar.vue";
import TableIsCompleted from "@/layouts/TableIsCompleted.vue";
import TableUncompleted from "@/layouts/TableUncompleted.vue";
</script>

<template>
    <div class="w-screen  min-h-screen grid grid-cols-6 grid-rows-5 overflow-hidden">
        <div class="col-span-1 row-span-5 bg-gradient-to-b from-10% from-Primary via-50% via-Secondary to-90% to-[#85182A] md:p-4 p-6 h-full w-full ">
            <SideBar/>  
        </div>
        <div class="col-span-5 row-span-5 w-full h-full">
            <h1 class="text-4xl md:text-5xl text-Primary font-semibold font-Playfair mx-6 my-2">Beranda</h1>
            <div class="w-full h-full px-6">
                <div class="md:grid md:grid-cols-4 md:grid-rows-4 flex flex-col w-full h-full gap-4">
                    <div class="col-span-1 row-span-1 rounded-xl shadow-PrimaryShadow bg-[#09a129]">
                        <div class="w-full h-full p-4">
                            <div>
                                <h2 class="md:text-xl text-lg text-white font-medium font-Poppins">Sudah Dibaca :</h2>
                            </div>
                            <div class="lg:mt-6 md:mt-4 mt-2">
                                <h1 class="lg:text-5xl md:text-4xl text-3xl text-center font-Poppins font-medium text-white">10000</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 row-span-1 rounded-xl shadow-PrimaryShadow bg-red-500">
                        <div class="w-full h-full p-4">
                            <div>
                                <h2 class="md:text-xl text-lg text-white font-medium font-Poppins">Belum Dibaca :</h2>
                            </div>
                            <div class="lg:mt-6 md:mt-4 mt-2">
                                <h1 class="lg:text-5xl md:text-4xl text-3xl  text-center font-Poppins font-medium text-white">100</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 row-span-1 bg-blue-500 rounded-xl shadow-PrimaryShadow">
                        <div class="w-full h-full p-4">
                            <div>
                                <h2 class="md:text-xl text-lg text-white font-medium font-Poppins">Total Buku :</h2>
                            </div>
                            <div class="lg:mt-6 md:mt-4 mt-2">
                                <h1 class="lg:text-5xl md:text-4xl text-3xl text-center font-Poppins font-medium text-white">10100</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 row-span-1 bg-[#ffdd00] rounded-xl shadow-PrimaryShadow">
                        <div class="w-full h-full p-4">
                            <div>
                                <h2 class="md:text-xl text-lg text-white font-medium font-Poppins">Buku Favorit:</h2>
                            </div>
                            <div class="lg:mt-6 md:mt-4 mt-2">
                                <h1 class="lg:text-5xl md:text-4xl text-3xl text-center font-Poppins font-medium text-white">5000</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2 row-span-4">
                        <TableIsCompleted :show-actions="false"/>
                    </div>
                    <div class="col-span-2 row-span-4 ">
                        <TableUncompleted :show-action="false"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>