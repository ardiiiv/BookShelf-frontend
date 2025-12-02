<script setup>
const props = defineProps({
    show: Boolean,
})

const emits = defineEmits(["close"])
</script>

<template>
    <div v-if="props.show" @click="emits('close')" class="fixed inset-0 flex justify-center items-center z-50 bg-black/25 backdrop-blur-sm animate__animated animate__fadeIn">
        <div @click.stop class="bg-white p-8 w-11/12 max-w-md shadow-PrimaryShadow rounded-xl animate__animated animate__flipInX">
            <slot/>
            <div class="mt-10 w-full h-full flex justify-between ">
                <button @click="emits('close')" class=" text-Primary ring-1 ring-Primary text-base font-Poppins font-medium py-2 px-10 rounded-xl">Yes</button>
                <button @click="emits('close')" class=" bg-Primary text-white text-base font-Poppins font-medium py-2 px-10 rounded-xl">No</button>
            </div>
        </div>
    </div>
</template>
