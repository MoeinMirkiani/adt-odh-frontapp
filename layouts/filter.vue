<template>
    <div class="px-4">
        <div class="container mx-auto grid grid-cols-12 gap-4">
            <aside class="hidden col-span-4 md:block">
                <FiltersSidebar />
            </aside>

            <main class="col-span-12 md:col-span-8">
                <NuxtPage />
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
