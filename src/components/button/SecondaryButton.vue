<script setup>
const { title } = defineProps({title: String})
</script>

<template>
    <button class="px-5 py-1 ring-2 ring-white rounded-xl text-white font-Poppins md:text-lg text-base font-medium hover:bg-white hover:text-Primary">{{ title }}</button>
</template>