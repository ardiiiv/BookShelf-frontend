<script setup>
import MainButton from '@/components/button/MainButton.vue';
import InputField from '@/components/input/InputField.vue';
import { useRouter } from 'vue-router';

const router = useRouter("")
const login = () => {
    router.push("/Beranda")
}
</script>

<template>
    <form @submit.prevent="login()" class="p-4 ">
        <div class=" mb-6">
            <h1 class="text-4xl font-Poppins font-semibold text-Primary">Daftar Akun Baru</h1>
            <p class="text-SlateGrey text-base">Daftar untuk mengatur, menyimpan, dan menemukan buku bacaanmu kapan saja.</p>
        </div>
        <div>
            <InputField :type="`text`" :title="`Username`" :required="true"/>
        </div>
        <div>
            <InputField :type="`email`" :title="`Email`" :required="true"/>
        </div>
        <div class="mb-6">
           <InputField :type="`password`" :title="`Password`" :required="true"/>
        </div>
        <div class="flex justify-end">
           <MainButton :type="`submit`" :title="`Daftar`"/>
        </div>
    </form>
</template>