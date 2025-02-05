<template>
    <div class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
        <h6 class="mb-6">{{ props.flight.smetadata.airlinename }}</h6>
        <p class="text-sm text-gray-500">{{ props.flight.smetadata.fltnumber }}</p>
        <span class="mb-4">From: {{ props.flight.smetadata.fromdestination }}</span>
        <span class="mb-4">to: {{ props.flight.smetadata.todestination }}</span>
        <Tag :value="props.flight.tname" class="capitalize" />
    </div>
</template>

<script setup lang="ts">
import Tag from 'primevue/tag'

interface Props {
    flight: Record<any, any>
}
const props = defineProps<Props>()
</script>
