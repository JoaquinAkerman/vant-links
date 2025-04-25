<script setup lang="ts">
import { ref } from 'vue'
import links from './data.json'

const selected = ref<keyof typeof links | null>(null)
</script>

<template>
  <div class="flex min-h-screen bg-gray-900 text-gray-100 font-sans">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 p-6 border-r border-gray-700">
      <h1 class="text-2xl font-bold mb-6">Categorías</h1>
      <ul class="space-y-2">
        <li
          v-for="key in Object.keys(links)"
          :key="key"
          @click="selected = key as keyof typeof links"
          :class="[
            'cursor-pointer px-4 py-2 rounded-lg transition-colors',
            selected === key ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-gray-700'
          ]"
        >
          {{ key }}
        </li>
      </ul>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-8 overflow-y-auto">
      <div v-if="selected" class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">{{ selected }}</h2>
        <ul class="space-y-4">
          <li
            v-for="(url, title) in links[selected]"
            :key="title"
          >
            <a
              :href="url"
              target="_blank"
              class="block bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors"
            >
              {{ title }}
            </a>
          </li>
        </ul>
      </div>
      <div v-else class="text-center text-gray-400 mt-20">
        <p>Selecciona una categoría para ver los links.</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Si querés, podés dejar esto vacío o eliminarlo. Todo se maneja con Tailwind */
</style>
