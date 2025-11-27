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
    <form @submit.prevent="login()" class="p-5 ">
        <div class=" mb-6">
            <h1 class="lg:text-4xl md:text-3xl text-2xl font-Poppins font-semibold text-Primary">Masuk ke Akun Anda</h1>
            <p class="text-SlateGrey text-base">Masuk untuk melanjutkan perjalanan membaca Anda.</p>
        </div>
        <div>
            <InputField :type="`email`" :title="`Email`" :required="true"/>
        </div>
        <div class="mb-6">
            
           <InputField :type="`password`" :title="`Password`" :required="true"/>
        </div>
        <div class="flex justify-end">
           <MainButton :type="`submit`" :title="`Masuk`"/>
        </div>
    </form>
</template>