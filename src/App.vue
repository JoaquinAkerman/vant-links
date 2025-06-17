<script setup lang="ts">
import { ref } from 'vue'
import links from './data.json'

const selected = ref<keyof typeof links | null>(null)
</script>

<template>
  <div class="flex min-h-screen bg-white text-black">
    <!-- Sidebar -->
    <aside class="w-80 p-8 border-r">
      <h1 class="text-2xl font-bold mb-8">Materias</h1>
      <ul>
        <li
          v-for="key in Object.keys(links)"
          :key="key"
          @click="selected = key as keyof typeof links"
          class="cursor-pointer py-2"
        >
          {{ key }}
        </li>
      </ul>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-8">
      <div v-if="selected" class="max-w-4xl mx-auto">
        <h1 class="text-2xl font-bold mb-8">{{ selected }}</h1>
        <div>
          <div
            v-for="(url, title) in links[selected]"
            :key="title"
          >
            <a
              :href="url"
              target="_blank"
              class="block py-2 text-blue-600 hover:underline"
            >
              {{ title }}
            </a>
          </div>
        </div>
      </div>
      <div v-else class="text-center">
        <p>Selecciona una categoría para ver los links.</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* No additional styles needed */
</style>
