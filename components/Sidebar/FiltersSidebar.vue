<template>
    <div class="p-4 border border-gray-200 rounded-lg">
        <h6 class="mb-6">Filters</h6>

        <div class="space-y-6">
            <SelectFilter
                v-model="flightType"
                :options="flightTypes"
                label="Flight Type"
                query-name="flight"
                default-value="all"
            />

            <SelectFilter
                v-model="ticketType"
                :options="ticketTypes"
                label="Ticket Type"
                query-name="ticket"
                default-value="all"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const flightTypes: string[] = ['all', 'arrival', 'departure']
const flightType = ref<string>('all')

const ticketTypes: string[] = ['all', 'basic', 'light', 'plus', 'go']
const ticketType = ref<string>('all')
</script>
