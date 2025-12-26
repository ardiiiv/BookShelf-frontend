<script setup>
import SideBar from '@/layouts/SideBar.vue';
import InputField from '@/components/input/InputField.vue';
import MainButton from '@/components/button/MainButton.vue';
import profile from "../assets/image/profile.png"
import { computed, onMounted, } from 'vue';
import { useAuth } from '@/composables/useAuth';

const { getProfile, user } = useAuth();
const username = computed(() => user.value?.username);
const email = computed(() => user.value?.email);
const password = computed(() => user.value?.password);
onMounted(() => {
    getProfile();
});

</script>

<template>
    <div class="w-screen  min-h-screen grid grid-cols-6 grid-rows-5 overflow-hidden">
    <div class="col-span-1 row-span-5 bg-gradient-to-b from-10% from-Primary via-50% via-Secondary to-90% to-[#85182A] md:p-4 p-6 h-full w-full ">
        <SideBar/>
    </div>
    <div class="col-span-5 row-span-5 w-full h-full p-2">
        <div class="px-4"><h1 class="text-3xl md:text-5xl font-Playfair font-semibold text-Primary">Akun</h1></div>
        <div class="md:w-3/4 w-11/12 mx-auto p-4 rounded-xl shadow-PrimaryShadow mt-10 ">
            <form>
                <div class="p-4 flex flex-col">
                    <div class="p-2 self-center">
                        <img :src="profile" alt="profile" class="rounded-full w-44 h-44">
                    </div>
                    <InputField :title="`Username`" v-model="username"/>
                    <InputField :title="`Email`" v-model="email" />
                    <InputField :title="`Password`" :type="`password`" v-model="password"/>
                    <div class="self-end">
                        <MainButton :title="`Edit Akun`" :type="`button`"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>