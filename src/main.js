import { createApp } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import TvScrollTop from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import './style.scss'

const app = createApp(TvScrollTop)
app.component('TvDemo', TvDemo)
app.mount('#tv-scroll-top')
