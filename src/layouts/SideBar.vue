<script setup>
import profile from "../assets/image/profile.png"
import SecondaryButton from "@/components/button/SecondaryButton.vue";
import { reactive, ref } from "vue";

const hidden = ref(true)
const isOpen = () => {
    hidden.value = false
}
const isClose = () => {
    hidden.value = true
}
const style = reactive({
    styleActive: "bg-white flex items-center text-Primary p-2 gap-2 rounded-xl font-medium text-lg",
    styleUnactive: "flex items-center text-white p-2 gap-2 rounded-xl font-medium text-lg"
})
</script>

<template>
    <div class="md:hidden">
        <v-icon @click="isOpen" v-if="hidden" name="md-menu-round" scale="1.75" fill="white"/>
    </div>
    <header :class="hidden ? 'h-full md:flex md:flex-col hidden' : 'absolute bg-gradient-to-b from-10% from-Primary via-50% via-Secondary to-90% to-[#85182A] h-full -translate-y-6 pt-6 pr-4'" >
        <div class="md:hidden">
            <v-icon @click="isClose()" name="bi-x" scale="2" fill="white"/>
        </div>
        <div class="flex flex-col justify-between md:h-full h-5/6">
            <div>
                <div class="flex flex-col items-center">
                    <img :src="profile" alt="profile" class="rounded-full md:w-24 md:h-24 w-16 h-16">
                    <h2 class="md:text-3xl text-xl text-white font-Poppins">Username</h2>
                    <p class="md:text-lg text-base text-white font-Poppins">email</p>
                </div>
                <nav class="mt-6">
                    <ul class="flex flex-col gap-4">
                        <li :class="$route.path === '/Beranda' ? style.styleActive : style.styleUnactive">
                            <v-icon name="hi-home" :scale="1.75"/>
                            <router-link to="/Beranda">
                                Beranda
                            </router-link>
                        </li>
                        <li :class="$route.path === '/TambahBuku' ? style.styleActive : style.styleUnactive">
                            <v-icon name="md-postadd-twotone" :scale="1.75"/>
                            <router-link to="/TambahaBuku" >
                                Tambah Buku
                            </router-link>
                        </li>
                        <li :class="$route.path === '/SudahDibaca' ? style.styleActive : style.styleUnactive">
                            <v-icon name="md-menubook-twotone" :scale="1.75" />
                            <router-link to="/SudahDibaca"  >
                                Sudah Dibaca
                            </router-link>
                        </li>
                        <li :class="$route.path === '/BelumDibaca' ? style.styleActive : style.styleUnactive">
                            <v-icon name="ri-book-mark-line" :scale="1.75"/>
                            <router-link to="/BelumDibaca"  >
                                Belum Dibaca
                            </router-link>
                        </li>
                        <li :class="$route.path === '/Akun' ? style.styleActive : style.styleUnactive" >
                            <v-icon name="md-accountcircle-twotone" scale="1.75" />
                            <router-link to="/Akun" >
                                Akun
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="self-center">
                <SecondaryButton :title="`Keluar`"/>
            </div>
        </div>
        
    </header>
</template>