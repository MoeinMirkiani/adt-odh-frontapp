<template>
    <div class="container mx-auto p-6 border border-gray-200 rounded-lg">
        <h1 class="mb-6 text-2xl">Flights List</h1>

        <div class="space-y-4">
            <FlightCard
                v-for="(flight, i) in flights"
                :key="i"
                :airline="flight.airline"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'filter'
})

const route = useRoute()
const flightsData = ref<{ airline: string }[]>([])
const flights: { airline: string }[] = [
    {
        airline: 'Air Canada'
    },
    {
        airline: 'Air France'
    },
    {
        airline: 'Air India'
    },
    {
        airline: 'Air New Zealand'
    },
    {
        airline: 'Air Serbia'
    }
]

const fetchFlights = async (queryParams: any) => {
    const { data, error } = await useFetch('localhost:8080/flight', {
        params: queryParams
    })

    if (error.value) {
        console.error('Error fetching flights:', error.value)
    } else {
        // flightsData.value = data.value
        console.log(data.value)
    }
}

watch(
    () => route.query,
    (newQuery) => {
        fetchFlights(newQuery)
    },
    { immediate: true }
)

await fetchFlights(route.query)
</script>
