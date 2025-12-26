<script setup>
import profile from "../assets/image/profile.png"
import SecondaryButton from "@/components/button/SecondaryButton.vue";
import { reactive, ref, computed, onMounted } from "vue";
import { useAuth } from "@/composables/useAuth";

const hidden = ref(true)
const isOpen = () => {
    hidden.value = false
}
const isClose = () => {
    hidden.value = true
}
const style = reactive({
    styleActive: "bg-white flex items-center text-Primary p-2 gap-1 rounded-xl font-medium md:text-lg text-base ",
    styleUnactive: "flex items-center text-white p-2 gap-1 rounded-xl font-medium md:text-lg text-base "
})


const { logout, getProfile, user } = useAuth();
const email = computed(() => user.value?.email);
const username = computed(() => user.value?.username);

onMounted(() => {
    getProfile();
});

const handleLogout = async () => {
    await logout();
    window.location.href = "/";
}

</script>

<template>
    <div class="md:hidden md:static fixed ">
        <v-icon @click="isOpen()" v-if="hidden" name="md-menu-round" scale="2" fill="white"/>
    </div>
    <header :class="hidden ? 'h-full md:flex md:flex-col hidden' : 'fixed bg-gradient-to-b from-10% from-Primary via-50% via-Secondary to-90% to-[#85182A] h-full -translate-y-6 -translate-x-6 pt-6 pr-4 flex flex-col'" >
        <div class="md:hidden self-end">
            <v-icon @click="isClose()" name="bi-x" scale="2" fill="white"/>
        </div>
        <div class="flex flex-col justify-between md:h-full h-5/6">
            <div>
                <div class="flex flex-col items-center gap-4">
                    <img :src="profile" alt="profile" class="rounded-full lg:w-24 lg:h-24 md:w-16 md:h-16 h-14 w-14">
                    <div class="text-center">
                        <h2 class="lg:text-3xl md:text-xl text-lg text-white font-Poppins">{{ username }}</h2>
                        <p class="md:text-sm text-xs text-white font-Poppins">{{ email }}</p>
                    </div>
                </div>
                <nav class="mt-6">
                    <ul class="flex flex-col gap-4">
                        <li :class="$route.path === '/Beranda' ? style.styleActive : style.styleUnactive">
                            <v-icon name="hi-home" :scale="hidden ? '1.75' : '1.5'"/>
                            <router-link to="/Beranda">
                                Beranda
                            </router-link>
                        </li>
                        <li :class="$route.path === '/TambahBuku' ? style.styleActive : style.styleUnactive">
                            <v-icon name="md-postadd-twotone" :scale="hidden ? '1.75' : '1.5'"/>
                            <router-link to="/TambahBuku" >
                                Tambah Buku
                            </router-link>
                        </li>
                        <li :class="$route.path === '/SudahDibaca' ? style.styleActive : style.styleUnactive">
                            <v-icon name="md-menubook-twotone" :scale="hidden ? '1.75' : '1.5'" />
                            <router-link to="/SudahDibaca"  >
                                Sudah Dibaca
                            </router-link>
                        </li>
                        <li :class="$route.path === '/BelumDibaca' ? style.styleActive : style.styleUnactive">
                            <v-icon name="ri-book-mark-line" :scale="hidden ? '1.75' : '1.5'"/>
                            <router-link to="/BelumDibaca"  >
                                Belum Dibaca
                            </router-link>
                        </li>
                        <li :class="$route.path === '/Akun' ? style.styleActive : style.styleUnactive" >
                            <v-icon name="md-accountcircle-twotone" :scale="hidden ? '1.75' : '1.5'"/>
                            <router-link to="/Akun" >
                                Akun
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="self-center">
                <SecondaryButton @click="handleLogout" :title="`Keluar`"/>
            </div>
        </div>
        
    </header>
</template>