<template>
    <div class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
        <h6 class="mb-6">{{ props.flight['smetadata.airlinename'] }}</h6>
        <p class="mb-4 text-sm text-gray-500">
            <span>Flight number:</span>
            <span class="ml-2">{{ props.flight['smetadata.fltnumber'] }}</span>
        </p>
        <p class="mb-4">From: {{ props.flight['smetadata.fromdestination'] }}</p>
        <p class="mb-4">To: {{ props.flight['smetadata.todestination'] }}</p>
        <Tag :value="props.flight.tname" severity="info" class="capitalize"></Tag>
    </div>
</template>

<script setup lang="ts">
import Tag from 'primevue/tag'

interface Props {
    flight: {
        [key: string]: string | null
    }
}
const props = defineProps<Props>()
</script>
