<template>
    <header>
        <div class="navbar bg-base-200 max-w-7xl mx-auto">
            <div class="flex-1">
                <RouterLink to="/" class="btn btn-ghost btn-square normal-case text-xl">
                    <img class="h-10 w-10 rounded" src="/logo-hglg.png" />
                </RouterLink>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1 gap-2">
                    <li>
                        <RouterLink to="/news">News</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/faq">FAQ</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts"></script>