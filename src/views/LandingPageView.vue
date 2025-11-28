<script setup>
import SecondaryButton from '@/components/button/SecondaryButton.vue';
import FormSignIn from '@/layouts/FormSignIn.vue';
import FormSignUp from '@/layouts/FormSignUp.vue';
import { ref, reactive } from 'vue';

const formSignIn = ref(true)
const text = reactive({
    title: {
    signIn: "Masuk",
    signUp: "Buat Akun Baru"
    },
    paragraf:{
        paragrafFrist: "Kelola dan akses koleksi buku Anda dengan mudah kapan saja dan di mana saja.",
        paragrafSecond: "Tandai mana yang sudah dibaca dan mana yang masih menunggu."
    }
})
</script>

<template>
    <div class="w-screen md:h-screen h-full flex items-center py-4">
        <div class="w-5/6 md:grid md:grid-cols-2 flex flex-col mx-auto justify-center rounded-xl shadow-PrimaryShadow">
            <div class=" md:h-full h-72 flex flex-col items-center justify-center bg-gradient-to-b from-10% from-Primary via-50% via-Secondary to-90% to-[#85182A] p-6 md:rounded-l-xl md:rounded-tr-none rounded-t-xl">
                <div>
                    <h1 class="font-Playfair text-white lg:text-5xl md:text-4xl text-3xl font-semibold text-center">Book Shelf App</h1>
                </div>
                <div class="mt-2">
                    <p class="md:text-lg text-base font-Poppins text-white text-center">
                        {{ formSignIn ? text.paragraf.paragrafFrist : text.paragraf.paragrafSecond }}
                    </p>
                </div>
                <div class="mt-10">
                    <SecondaryButton @click="formSignIn = !formSignIn" :title="formSignIn ? text.title.signUp : text.title.signIn "/>
                </div>
            </div>
            <div class="bg-white md:rounded-r-xl rounded-b-xl p-6">
                <FormSignIn v-if="formSignIn"/>
                <FormSignUp v-else/>
            </div>
        </div>
    </div>
</template>