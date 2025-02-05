<template>
    <div class="p-4 border border-gray-200 rounded-lg">
        <h6 class="mb-6">Filters</h6>

        <div class="space-y-6">
            <SelectFilter
                v-model="flightType"
                :options="flightTypes"
                label="Flight Type"
                query-name="flight_type"
                default-value="All"
            />

            <SelectFilter
                v-model="ticketType"
                :options="ticketTypes"
                label="Ticket Type"
                query-name="ticket_type"
                default-value="All"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const flightTypes: string[] = ['All', 'Arrival', 'Departure']
const flightType = ref<string>('All')

const ticketTypes: string[] = ['All', 'Basic', 'Light', 'Plus', 'Go']
const ticketType = ref<string>('All')
</script>
