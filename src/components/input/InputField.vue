<script setup>
const { type = "text", title = "title", required = false } = defineProps({
    type: String,
    title: String,
    required: Boolean
})
</script>

<template>
    <div class="flex flex-col gap-2 mb-4">
        <label class="md:text-lg text-base font-Poppins font-medium text-Primary">{{ title }}</label>
        <input class=" py-2 px-4 rounded-md ring-1 ring-SlateGrey focus:outline-2 focus:outline-Primary" :type="type" :required="required">
    </div>
</template>