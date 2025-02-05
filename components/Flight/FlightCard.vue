<template>
    <div class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
        <h6 class="mb-6">{{ props.airline }}</h6>
    </div>
</template>

<script setup lang="ts">
interface Props {
    airline: string
}
const props = defineProps<Props>()
</script>
