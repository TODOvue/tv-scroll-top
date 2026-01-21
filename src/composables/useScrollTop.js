import { ref, onMounted, onUnmounted, unref } from 'vue';

export function useScrollTop(threshold = 300, showOnScrollUp = false) {
  const isVisible = ref(false);
  const lastScrollY = ref(0);

  const checkScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.value;
      const isPastThreshold = currentScrollY > unref(threshold);
      
      if (unref(showOnScrollUp)) {
        isVisible.value = isPastThreshold && isScrollingUp;
      } else {
        isVisible.value = isPastThreshold;
      }
      
      lastScrollY.value = currentScrollY;
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

