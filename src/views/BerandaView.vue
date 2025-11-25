<script setup>
import profile from "../assets/image/profile.png"
import SecondaryButton from "@/components/button/SecondaryButton.vue";
</script>

<template>
    <div class="w-screen h-screen grid grid-cols-5 grid-rows-4">
        <div class="col-span-1 row-span-4 bg-gradient-to-b from-10% from-Primary via-50% via-Secondary to-90% to-[#85182A] p-6">
            <header class="w-full h-full flex flex-col justify-between">
                <div>
                    <div class="flex flex-col items-center">
                        <img :src="profile" alt="profile" class="rounded-full md:w-24 md:h-24 w-16 h-16">
                        <h2 class="md:text-3xl text-xl text-white font-Poppins">Username</h2>
                        <p class="md:text-lg text-base text-white font-Poppins">email</p>
                    </div>
                    <nav class="mt-6">
                        <ul class="flex flex-col gap-4">
                            <li>
                                <router-link to="/Beranda" :class="$route.path === '/Beranda' ? 'bg-white flex items-center text-Primary p-2 gap-2 rounded-xl text-lg font-medium' : 'flex items-center text-white p-2 gap-2 rounded-xl text-lgS font-medium'">
                                    <v-icon name="hi-home" scale="1.75" />
                                    Beranda
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/TambahaBuku" :class="$route.path === '/Beranda' ? 'bg-white flex items-center text-Primary p-2 gap-2 rounded-xl text-lg font-medium' : 'flex items-center text-white p-2 gap-2 rounded-xl text-lgS font-medium'" >
                                    <v-icon name="md-postadd-twotone" scale="1.75"/>
                                    Tambah Buku
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/SudahDibaca" :class="$route.path === '/Beranda' ? 'bg-white flex items-center text-Primary p-2 gap-2 rounded-xl text-lg font-medium' : 'flex items-center text-white p-2 gap-2 rounded-xl text-lgS font-medium'" >
                                    <v-icon name="md-menubook-twotone" scale="1.75" />
                                    Sudah Dibaca
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/BelumDibaca" :class="$route.path === '/Beranda' ? 'bg-white flex items-center text-Primary p-2 gap-2 rounded-xl text-lg font-medium' : 'flex items-center text-white p-2 gap-2 rounded-xl text-lgS font-medium'" >
                                    <v-icon name="ri-book-mark-line" scale="1.75"/>
                                    Belum Dibaca
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/Akun" :class="$route.path === '/Beranda' ? 'bg-white flex items-center text-Primary p-2 gap-2 rounded-xl text-lg font-medium' : 'flex items-center text-white p-2 gap-2 rounded-xl text-lgS font-medium'" >
                                    <v-icon name="md-accountcircle-twotone" scale="1.75" />
                                    Akun
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="self-center">
                    <SecondaryButton :title="`Keluar`"/>
                </div>
            </header>
        </div>
        <div class="col-span-4 row-span-4 bg-blue-300">
            <div>
                
            </div>
        </div>
    </div>
</template>