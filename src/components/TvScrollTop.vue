<script setup>
import { useScrollTop } from '../composables/useScrollTop';
import { computed } from 'vue';

const props = defineProps({
  threshold: {
    type: Number,
    default: 300
  },
  position: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right'].includes(value)
  }
});

const { isVisible, scrollToTop } = useScrollTop(props.threshold);

const positionClass = computed(() => `tv-scroll-top--${props.position}`);
const transitionName = computed(() => `scroll-top-${props.position}`);
</script>

<template>
  <Transition :name="transitionName">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="tv-scroll-top"
      :class="positionClass"
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
</style>
