<script setup lang="ts">
import { ref } from 'vue'
import links from './data.json'
const selected = ref<string | null>(null)
</script>

<template>
  <div class="flex min-h-screen bg-gray-900 text-gray-100">
    <aside class="w-64 bg-gray-800 p-4 border-r border-gray-700">
      <h1 class="text-xl font-bold mb-6">Categorías</h1>
      <ul class="space-y-2">
        <li
          v-for="(obj, key) in links"
          :key="key"
          @click="selected = key"
          :class="[
            'cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-700 transition-all',
            selected === key ? 'bg-blue-600 text-white' : ''
          ]"
        >
          {{ key }}
        </li>
      </ul>
    </aside>

    <main class="flex-1 p-8 overflow-y-auto">
      <div v-if="selected" class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">{{ selected }}</h1>
        <ul class="space-y-3">
          <li v-for="(url, title) in links[selected]" :key="title">
            <a
              :href="url"
              target="_blank"
              class="block p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
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

<style >
aside {
  background-color: #2f343a;
  padding: 1rem;
  border-right: 1px solid #444;
}

aside h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

aside ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

aside li {
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
}

aside li:hover {
  background-color: #444;
}

aside li.selected {
  background-color: #3498db;
  color: #fff;
}
main {
  padding: 2rem;
  overflow-y: auto;
}

main h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

main ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

main li {
  margin-bottom: 1rem;
}

main a {
  display: block;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #444;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

main a:hover {
  background-color: #3498db;
}
.text-center {
  text-align: center;
}

.text-gray-400 {
  color: #ccc;
}

.mt-20 {
  margin-top: 5rem;
}
</style>
