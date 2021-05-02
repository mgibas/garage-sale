<template>
  <div class="h-screen bg-gray-50 flex overflow-hidden">

    <!-- Content area -->
    <div class="flex-1 flex flex-col overflow-hidden">

      <!-- Main content -->
      <div class="flex-1 flex items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex">
              <h1 class="flex-1 text-2xl font-bold text-gray-900">Wyprzedaż</h1>
            </div>

            <!-- Gallery -->
            <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
              <h2 id="gallery-heading" class="sr-only">Recently viewed</h2>
              <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <li v-for="item in items" :key="item.name" class="relative" @click="itemClick(item)">
                  <div :class="[item.current ? 'ring-2 ring-offset-2 ring-indigo-500' : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500', 'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden']">
                    <img :src="item.image" alt="" :class="[currentItem === item ? '' : 'group-hover:opacity-75', 'object-cover pointer-events-none']" />
                    <button type="button" class="absolute inset-0 focus:outline-none">
                      <span class="sr-only">View details for {{ item.name }}</span>
                    </button>
                  </div>
                  <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{{ item.name }}</p>
                  <p class="block text-sm font-medium text-gray-500 pointer-events-none">{{ currency(item.price) }}</p>
                </li>
              </ul>
            </section>
          </div>
        </main>

        <!-- Details sidebar -->
        <slide-over class="lg:hidden" :open="detailsOpen" @close="detailsOpen = false">
          <item-details :item="currentItem" /> 
        </slide-over>
        <TransitionRoot
          as="aside"
          class="hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block"
          :show="!!currentItem"
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enter-from="translate-x-full"
          enter-to="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leave-from="translate-x-0"
          leave-to="translate-x-full"
        >
          <item-details :item="currentItem" /> 
        </TransitionRoot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { TransitionRoot } from '@headlessui/vue'
import ItemDetails from '../components/item-details.vue'
import SlideOver from '../components/slide-over.vue'
import useCurrencyFormat from '../composables/use-currency-format.js'

const items = [{
  name: 'Test',
  price: 549999,
  image: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  description: 'Dictum ante, et mollis eros augue at est. Class aptent.'
}, {
  name: 'Kubek',
  price: 70000,
  description: 'Aliquam elit, a commodo nisi felis nec nibh. Nulla facilisi. Etiam at tortor. Vivamus quis sapien nec.',
  image: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
}, {
  name: 'Coś',
  price: 123123,
  description: 'Aliquam elit, a commodo nisi felis nec nibh. Nulla facilisi. Etiam at tortor. Vivamus quis sapien nec.',
  image: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
}, {
  name: 'Gra planszowa',
  price: 65454,
  description: 'Dictum ante, et mollis eros augue at est. Class aptent.',
  image: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
}]
const currentItem = ref()
const detailsOpen = ref(false)
const itemClick = (item) => {
  currentItem.value = item
  detailsOpen.value = !matchMedia('(min-width: 1024px)').matches && true
}
const { currency } = useCurrencyFormat()
</script>
