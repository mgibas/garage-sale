<template>
  <div class="flex flex-col h-full space-y-6">
    <div>
      <div class="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
        <img :src="item.image" alt="" class="object-cover" />
      </div>
      <div class="mt-4 flex items-start justify-between">
        <div>
          <h2 class="text-lg font-medium text-gray-900"><span class="sr-only">Details for </span>{{ item.name }}</h2>
          <p class="text-sm font-medium text-gray-500">{{ currency(item.price) }}</p>
        </div>
      </div>
    </div>
    <div>
      <h3 class="sr-only">Opis</h3>
      <div class="mt-2 flex items-center justify-between">
        <p class="text-sm text-gray-500 italic">{{ item.description }}</p>
      </div>
    </div>
    <div class="flex">
      <button type="button" class="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Biorę
      </button>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'
  import useCurrencyFormat from '../composables/use-currency-format.js'

  const props = defineProps({ item: Object })
  const { currency } = useCurrencyFormat()
</script>
