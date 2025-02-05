<template>
    <nav>
        <ul class="flex gap-5">
            <li v-for="item in navItems" :key="item.name">
                <NuxtLink :to="item.link" :external="item.external" class="text-sm text-gray-700 hover:text-emerald-500 [&.router-link-active]:text-emerald-500 md:text-lg">
                    {{ item.name }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
interface NavItem {
    name: string
    link: string
    external?: boolean
}

const navItems: NavItem[] = [
    {
        name: 'Flights',
        link: '/'
    },
    {
        name: 'Open Data Hub',
        link: 'https://opendatahub.com/',
        external: true
    },
    {
        name: 'Contact',
        link: '/contact'
    }
]
</script>
