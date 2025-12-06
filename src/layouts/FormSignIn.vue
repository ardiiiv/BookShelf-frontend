<script setup>
import MainButton from '@/components/button/MainButton.vue';
import InputField from '@/components/input/InputField.vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';
import { ref } from 'vue';

const email = ref("")
const password = ref("")

const { login, loading, error } = useAuth()

const router = useRouter()
const handleLogin = async () => {
    const res = await login({email: email.value, password: password.value})
    if (res) router.push("/Beranda");
}

</script>
<template>
    <form @submit.prevent="handleLogin()" class="p-5 ">
        <div class=" mb-6">
            <h1 class="lg:text-4xl md:text-3xl text-2xl font-Poppins font-semibold text-Primary">Masuk ke Akun Anda</h1>
            <p class="text-SlateGrey text-base">Masuk untuk melanjutkan perjalanan membaca Anda.</p>
        </div>
        <div>
            <InputField v-model="email" :type="`email`" :title="`Email`" :required="true"/>
        </div>
        <div class="mb-6">
           <InputField v-model="password" :type="`password`" :title="`Password`" :required="true"/>
        </div>
        <div class="flex justify-end">
          <MainButton type="submit" :disabled="loading" :title="loading ? 'Memproses...' : 'Masuk'" />
        </div>

        <p v-if="error" class="text-red-500 mt-4 text-sm">{{ error }}</p>
    </form>
</template>