import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollTop(threshold = 300) {
  const isVisible = ref(false);

  const checkScroll = () => {
    if (typeof window !== 'undefined') {
      isVisible.value = window.scrollY > threshold;
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', checkScroll);
      checkScroll();
    }
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', checkScroll);
    }
  });

  return {
    isVisible,
    scrollToTop
  };
}

