<template>
    <div class="container mx-auto p-6 border border-gray-200 rounded-lg">
        <h1 class="mb-6 text-2xl">Flights List</h1>

        <div class="grid grid-cols-12 gap-4">
            <FlightCard
                v-for="(flight, i) in flightsData"
                :key="i"
                :flight="flight"
                class="col-span-6"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'filter'
})

const flights: {}[] = [
    {
        "tname": "arrival",
        "smetadata.fltnumber": "BQ1933",
        "smetadata.airlinename": "Sky Alps",
        "smetadata.fromdestination": "LGW",
        "smetadata.todestination": "BZO",
        "smetadata.std": "15:40",
        "smetadata.sta": "18:00",
        "smetadata.fares": null,
        "fareType": null
    },
    {
        "tname": "departure",
        "smetadata.fltnumber": "BQ1934",
        "smetadata.airlinename": "Sky Alps",
        "smetadata.fromdestination": "BZO",
        "smetadata.todestination": "LGW",
        "smetadata.std": "18:40",
        "smetadata.sta": "21:00",
        "smetadata.fares": null,
        "fareType": null
    }
]

const route = useRoute()
const flightsData = ref<{ [key: string]: string | null }[]>([])

const fetchFlights = async (queryParams: any) => {
    const { data, error } = await useFetch('http://localhost:8080/flight', {
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
