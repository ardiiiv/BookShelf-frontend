<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  title: {
    type: String,
    default: "title"
  },
  required: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(["update:modelValue"])
</script>

<template>
  <div class="flex flex-col gap-2 mb-4">
    <label class="md:text-lg text-base font-Poppins font-medium text-Primary">
      {{ title }}
    </label>

    <input
      class="py-2 px-4 rounded-md ring-1 ring-SlateGrey focus:outline-2 focus:outline-Primary"
      :type="type"
      :required="required"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
