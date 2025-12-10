<script setup>
import MainButton from '@/components/button/MainButton.vue';
import InputField from '@/components/input/InputField.vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';
import { ref } from "vue";

const { register, loading, error} = useAuth()

const username = ref("") 
const email = ref("") 
const password = ref("") 

const router = useRouter()
const handleRegister = async () => {
    const res = await register({
        username: username.value,
        email: email.value,
        password: password.value
    });

    if (res) router.push("/Beranda");
}
</script>

<template>
    <form @submit.prevent="handleRegister()" class="p-4 ">
        <div class=" mb-6">
            <h1 class="lg:text-4xl md:text-3xl text-2xl font-Poppins font-semibold text-Primary">Daftar Akun Baru</h1>
            <p class="text-SlateGrey text-base">Daftar untuk mengatur, menyimpan, dan menemukan buku bacaanmu kapan saja.</p>
        </div>
        <div>
            <InputField v-model="username" :type="`text`" :title="`Username`" :required="true"/>
        </div>
        <div>
            <InputField v-model="email" :type="`email`" :title="`Email`" :required="true"/>
        </div>
        <div class="mb-6">
           <InputField v-model="password" :type="`password`" :title="`Password`" :required="true"/>
        </div>
        <p v-if="error" class="text-red-600 text-sm mb-3">{{ error }}</p>
        <div class="flex justify-end">
           <MainButton :disabled="loading" :type="`submit`" :title="loading ? 'Memproses...' : 'Daftar'" />
        </div>
    </form>
</template>