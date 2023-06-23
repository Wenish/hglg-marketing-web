<template>
    <div>

        <div class="hero bg-base-200 py-20">
            <div class="hero-content flex-col lg:flex-row gap-10">
                <img src="../assets/soldat.png" class="max-w-sm rounded-lg -scale-x-100" />
                <div>
                    <h1 class="text-5xl font-bold pb-4">Projekt HGLG</h1>
                    <p class="text-xl pb-2">Ein geistiger Nachfolger der „Die Siedler“ – Reihe von Blue Byte und Ubisoft,
                        das sind
                        wir, Projekt HGLG.</p>
                    <p class="text-xl pb-4">Enttäuscht von der Entwicklung der „Die Siedler“ – Reihe wollen wir zurück zu
                        Siedler
                        III und IV und die Formel zu einem Aufbauspiel-RTS-Hybriden perfektionieren. Zurück zu den alten
                        Prinzipien mit Fokus auf den Multiplayer um den Genre des „Siedler-Like“ wiederzubeleben.</p>
                    <a class="btn btn-primary" href="https://discord.gg/pUur4t7aBb" target="_blank">
                        <span>Tritt unserem Discord bei</span>
                        <IconDiscord />
                    </a>
                </div>
            </div>
        </div>

        <div class="hero bg-base-100 py-20">
            <div class="hero-content flex-col lg:flex-row-reverse gap-10">
                <img src="../assets/woodcutter.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold pb-4">Konzeptart Holzfäller</h1>
                    <p class="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>

        <div class="hero bg-base-200 py-20">
            <div class="hero-content flex-col lg:flex-row gap-10">
                <img src="../assets/stonemason.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold pb-4">Konzeptart Steinmetz</h1>
                    <p class="text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';


const IconDiscord = defineAsyncComponent(() => import('../components/IconDiscord.vue'))
</script>