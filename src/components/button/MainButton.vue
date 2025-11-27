<script setup>
const { title ="...", type = "button" } = defineProps({
title: String,
type: String,

});
</script>

<template>
     <button :type="type" class="rounded-xl px-6 py-2 md:text-lg text-base font-Poppins text-white bg-Primary hover:bg-Secondary font-medium">{{ title }}</button>
</template>