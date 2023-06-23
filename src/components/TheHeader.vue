<template>
    <header>
        <div class="navbar bg-base-200">
            <div class="flex-1">
                <RouterLink to="/" class="btn btn-ghost normal-case text-xl">
                    <img class="h-8" src="/logo-hglg.png" />
                </RouterLink>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li>
                        <a>News</a>
                    </li>
                    <li>
                        <a>FAQ</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts"></script>