<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from './utils/mocks.js'

const TvScrollTop = defineAsyncComponent(/* webpackChunkName: "tvScrollTop" */() => import('../components/TvScrollTopDemo.vue'))
</script>

<template>
  <TvDemo
    :component="TvScrollTop"
    :variants="demos"
    hide-background
    component-name="TvScrollTop"
    npm-install="@todovue/tv-scroll-top"
    source-link="https://github.com/TODOvue/tv-scroll-top"
    url-clone="https://github.com/TODOvue/tv-scroll-top.git"
    version="1.0.0"
  />
</template>

<style scoped>

</style>
