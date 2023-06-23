<template>
    <div class="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <TheHeader />
        <main>
            <RouterView />
        </main>
        <TheFooter />
    </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';


const TheHeader = defineAsyncComponent(() => import('../components/TheHeader.vue'))
const TheFooter = defineAsyncComponent(() => import('../components/TheFooter.vue'))
</script>