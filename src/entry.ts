import type { App, Plugin } from 'vue'
import _TvScrollTop from './components/TvScrollTop.vue'
import './style.scss'

const TvScrollTop = _TvScrollTop as typeof _TvScrollTop & Plugin;
TvScrollTop.install = (app: App) => {
  app.component('TvScrollTop', TvScrollTop)
};

export { TvScrollTop }

export const TvScrollTopPlugin: Plugin = {
  install: TvScrollTop.install
};
export default TvScrollTop;

declare module 'vue' {
  export interface GlobalComponents {
    TvScrollTop: typeof TvScrollTop;
  }
}
