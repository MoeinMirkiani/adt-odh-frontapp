<template>
    <FloatLabel label="Flight Type" variant="in">
        <Select v-model="model" :options="props.options" />
        <label for="flight_type">{{ props.label }}</label>
    </FloatLabel>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Select from 'primevue/select'
import FloatLabel from 'primevue/floatlabel'

const model = ref<string>('')

interface Props {
    options: string[]
    label: string
    queryName: string
    defaultValue: string
}
const props = defineProps<Props>()

const route = useRoute()
const router = useRouter()

model.value = ((route.query[props.queryName] as string) || props.defaultValue).toLowerCase()

watch(model, (newValue) => {
    const query = { ...route.query }
    if (newValue === props.defaultValue) {
        delete query[props.queryName]
    } else {
        query[props.queryName] = newValue
    }

    router.push({ query })
})
</script>