
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-scroll-top',
    configKey: 'tvScrollTop'
  },
  setup(_options, nuxt) {
    const cssPath = '@todovue/tv-scroll-top/style.css';
    if (!nuxt.options.css.includes(cssPath)) {
      nuxt.options.css.push(cssPath);
    }
  }
})
