<template>
  <section
    data-test="bottom-navigation"
    class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
  >
    <div class="flex justify-between" data-test="button-wrap">
      <a
        v-for="nav in navs"
        :href="nav.link"
        :key="nav.title"
        class="w-full focus:text-indigo-500 hover:text-indigo-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <component :is="nav.icon" class="w-5 h-5 inline-block mb-1" />
        <span class="tab tab-home block text-xs">{{ nav.title }}</span>
      </a>
    </div>
  </section>
</template>

<script setup>
import { HomeIcon, ShoppingCartIcon, CogIcon } from '@heroicons/vue/solid';

const navs = [
  { icon: HomeIcon, title: '홈', link: '#home' },
  { icon: ShoppingCartIcon, title: '장바구니', link: '#cart' },
  { icon: CogIcon, title: '설정', link: '#setting' },
];
</script>

<style></style>
