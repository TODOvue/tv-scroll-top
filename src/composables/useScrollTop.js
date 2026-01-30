import { ref, onMounted, onUnmounted, unref, watch } from 'vue';

export function useScrollTop(threshold = 300, showOnScrollUp = false) {
  const isVisible = ref(false);
  const lastScrollY = ref(0);

  const checkScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      const thresholdVal = unref(threshold);
      const showOnScrollUpVal = unref(showOnScrollUp);

      const isPastThreshold = currentScrollY > thresholdVal;
      const isScrollingUp = currentScrollY < lastScrollY.value;
      const isScrollingDown = currentScrollY > lastScrollY.value;

      if (showOnScrollUpVal) {
        if (isScrollingUp && isPastThreshold) {
          isVisible.value = true;
        } else if (isScrollingDown || !isPastThreshold) {
          isVisible.value = false;
        }
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
      lastScrollY.value = window.scrollY;
      window.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
    }
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', checkScroll);
    }
  });

  watch([() => unref(threshold), () => unref(showOnScrollUp)], () => {
    checkScroll();
  }, { immediate: true });

  return {
    isVisible,
    scrollToTop
  };
}

