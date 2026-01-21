<p align="center"><img width="150" src="https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png" alt="TODOvue logo">
</p>

# TODOvue Scroll Top (TvScrollTop)
A lightweight, customizable Vue 3 "scroll to top" button component with smooth animations, position variants, configurable threshold, and SSR support. Works seamlessly in Single Page Apps and Server-Side Rendered (SSR) environments like Nuxt 3.

[![npm](https://img.shields.io/npm/v/@todovue/tv-scroll-top.svg)](https://www.npmjs.com/package/@todovue/tv-scroll-top)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-scroll-top.svg)](https://www.npmjs.com/package/@todovue/tv-scroll-top)
[![npm total downloads](https://img.shields.io/npm/dt/@todovue/tv-scroll-top.svg)](https://www.npmjs.com/package/@todovue/tv-scroll-top)
![License](https://img.shields.io/github/license/TODOvue/tv-scroll-top)
![Release Date](https://img.shields.io/github/release-date/TODOvue/tv-scroll-top)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@todovue/tv-scroll-top)
![Node Version](https://img.shields.io/node/v/@todovue/tv-scroll-top)
![Last Commit](https://img.shields.io/github/last-commit/TODOvue/tv-scroll-top)
![Stars](https://img.shields.io/github/stars/TODOvue/tv-scroll-top?style=social)

> Demo: https://ui.todovue.blog/scrolltop

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Nuxt 4 / SSR Usage](#nuxt-4--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Composable API](#composable-api)
- [Usage Examples](#usage-examples)
- [Animations](#animations)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features
- Smooth scroll to top with one click
- Configurable visibility threshold (show button after X pixels scrolled)
- Position variants: left or right side
- Beautiful entrance/exit animations with rotation and bounce effects
- Backdrop blur effect for modern UI
- Automatic show/hide based on scroll position
- SSR-safe (works with Nuxt 3 and other SSR frameworks)
- Composable API (`useScrollTop`) for custom implementations
- Keyboard accessible (focus states and ARIA labels)
- Lightweight and tree-shakeable
- TypeScript support

## Installation
Using npm:
```bash
npm install @todovue/tv-scroll-top
```
Using yarn:
```bash
yarn add @todovue/tv-scroll-top
```
Using pnpm:
```bash
pnpm add @todovue/tv-scroll-top
```

### Importing Styles
**Important:** You must explicitly import the stylesheet in your application.

#### For Vue/Vite SPA:
```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import '@todovue/tv-scroll-top/style.css'
import { TvScrollTop } from '@todovue/tv-scroll-top'

const app = createApp(App)
app.component('TvScrollTop', TvScrollTop)
app.mount('#app')
```

#### For Nuxt 3/4:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@todovue/tv-scroll-top/nuxt'
  ]
})
```

Then register the component in a plugin as shown in the [Nuxt 3 / SSR Usage](#nuxt-3--ssr-usage) section.

## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import '@todovue/tv-scroll-top/style.css'
import TvScrollTop from '@todovue/tv-scroll-top'

createApp(App)
  .use(TvScrollTop) // enables <TvScrollTop /> globally
  .mount('#app')
```
Local import inside a component:
```vue
<script setup>
import { TvScrollTop } from '@todovue/tv-scroll-top'
import '@todovue/tv-scroll-top/style.css'
</script>

<template>
  <div>
    <!-- Your page content -->
    <div style="height: 2000px">
      Scroll down to see the button appear...
    </div>
    
    <!-- Scroll to top button (appears after scrolling 300px by default) -->
    <TvScrollTop />
  </div>
</template>
```
**Note:** Don't forget to import the CSS in your main entry file as shown above.

## Nuxt 4 / SSR Usage
First, add the module to your `nuxt.config.ts`:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@todovue/tv-scroll-top/nuxt']
})
```

Alternatively, you can manually add the CSS:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@todovue/tv-scroll-top/style.css'],
})
```

Then create a plugin file: `plugins/tv-scroll-top.client.ts`:
```ts
import { defineNuxtPlugin } from '#app'
import TvScrollTop from '@todovue/tv-scroll-top'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(TvScrollTop)
})
```
Use anywhere in your Nuxt app:
```vue
<template>
  <div>
    <NuxtPage />
    
    <!-- Scroll to top button -->
    <TvScrollTop :threshold="400" position="right" />
  </div>
</template>
```
Optional direct import (no plugin):
```vue
<script setup>
import { TvScrollTop } from '@todovue/tv-scroll-top'
</script>
```

## Component Registration Options
| Approach                                                                 | When to use                                    |
|--------------------------------------------------------------------------|------------------------------------------------|
| Global via `app.use(TvScrollTop)`                                        | Many usages across app / design system install |
| Local named import `{ TvScrollTop }`                                     | Isolated / code-split contexts                 |
| Direct default import `import TvScrollTop from '@todovue/tv-scroll-top'` | Single usage or manual registration            |

## Props
| Prop           | Type    | Default | Description                                                                 |
|----------------|---------|---------|-----------------------------------------------------------------------------|
| threshold      | Number  | 300     | Scroll position (in pixels) after which the button becomes visible.         |
| position       | String  | 'right' | Position of the button: `'left'` or `'right'`.                              |
| showOnScrollUp | Boolean | false   | When true, the button only appears when scrolling up (not down).            |

### Prop Details

#### `threshold`
Controls when the scroll-to-top button appears. The button will show when the user has scrolled down more than this value (in pixels).

Example:
```vue
<TvScrollTop :threshold="500" />
```

#### `position`
Controls the horizontal position of the button on the screen.

Accepted values:
- `'right'` - Button appears on the right side (default)
- `'left'` - Button appears on the left side

Example:
```vue
<TvScrollTop position="left" />
```

#### `showOnScrollUp`
Controls whether the button should only appear when the user is scrolling up. When enabled, the button will hide when scrolling down and show when scrolling up (as long as the threshold is met).

Accepted values:
- `false` - Button shows whenever scroll position exceeds threshold (default behavior)
- `true` - Button only shows when scrolling up AND scroll position exceeds threshold

Example:
```vue
<!-- Button appears only when scrolling up -->
<TvScrollTop :show-on-scroll-up="true" />
```

This is particularly useful for a better user experience, as the button won't obstruct content while the user is reading down the page.

## Composable API
TvScrollTop includes a composable `useScrollTop` that you can use to build custom scroll-to-top functionality.

### `useScrollTop(threshold, showOnScrollUp)`
```js
import { useScrollTop } from '@todovue/tv-scroll-top'

const { isVisible, scrollToTop } = useScrollTop(300, false)
```

**Parameters:**
- `threshold` (Number|Ref): Scroll position in pixels (default: 300)
- `showOnScrollUp` (Boolean|Ref): Whether to show the button only when scrolling up (default: false)

**Returns:**
- `isVisible` (Ref<Boolean>): Reactive boolean indicating if scroll position is past the threshold (and scrolling direction if enabled)
- `scrollToTop` (Function): Function to smoothly scroll to the top of the page

**Example:**
```vue
<script setup>
import { useScrollTop } from '@todovue/tv-scroll-top'

const { isVisible, scrollToTop } = useScrollTop(400, true)
</script>

<template>
  <button v-if="isVisible" @click="scrollToTop">
    Custom Scroll Top Button
  </button>
</template>
```

## Usage Examples

### Default (Right Position, 300px Threshold)
```vue
<script setup>
import { TvScrollTop } from '@todovue/tv-scroll-top'
import '@todovue/tv-scroll-top/style.css'
</script>

<template>
  <div>
    <div style="height: 2000px">
      <!-- Your content -->
    </div>
    
    <TvScrollTop />
  </div>
</template>
```

### Left Position
```vue
<script setup>
import { TvScrollTop } from '@todovue/tv-scroll-top'
import '@todovue/tv-scroll-top/style.css'
</script>

<template>
  <div>
    <div style="height: 2000px">
      <!-- Your content -->
    </div>
    
    <TvScrollTop position="left" />
  </div>
</template>
```

### Low Threshold (100px)
Perfect for shorter pages or when you want the button to appear quickly.
```vue
<script setup>
import { TvScrollTop } from '@todovue/tv-scroll-top'
import '@todovue/tv-scroll-top/style.css'
</script>

<template>
  <div>
    <div style="height: 2000px">
      <!-- Your content -->
    </div>
    
    <TvScrollTop :threshold="100" />
  </div>
</template>
```

### High Threshold (600px)
For longer pages where you want the button to appear later.
```vue
<script setup>
import { TvScrollTop } from '@todovue/tv-scroll-top'
import '@todovue/tv-scroll-top/style.css'
</script>

<template>
  <div>
    <div style="height: 3000px">
      <!-- Your content -->
    </div>
    
    <TvScrollTop :threshold="600" />
  </div>
</template>
```

### Show Only When Scrolling Up
The button only appears when the user scrolls up, preventing content obstruction while reading down the page.
```vue
<script setup>
import { TvScrollTop } from '@todovue/tv-scroll-top'
import '@todovue/tv-scroll-top/style.css'
</script>

<template>
  <div>
    <div style="height: 2000px">
      <!-- Your content -->
    </div>
    
    <TvScrollTop :show-on-scroll-up="true" />
  </div>
</template>
```

### Custom Implementation with Composable
```vue
<script setup>
import { useScrollTop } from '@todovue/tv-scroll-top'

const { isVisible, scrollToTop } = useScrollTop(200, true)

const handleClick = () => {
  scrollToTop()
  console.log('Scrolling to top!')
}
</script>

<template>
  <Transition name="fade">
    <button 
      v-if="isVisible" 
      @click="handleClick"
      class="my-custom-scroll-button"
    >
      ↑ Top
    </button>
  </Transition>
</template>

<style scoped>
.my-custom-scroll-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
```

## Animations
TvScrollTop includes beautiful built-in animations that differ based on position:

### Right Position Animations
- **Enter**: Slides in from right with rotation (180° to 0°), bounce effect, and scale
- **Leave**: Slides out to right with rotation (0° to 180°) and scale down

### Left Position Animations
- **Enter**: Slides in from left with rotation (-180° to 0°), bounce effect, and scale
- **Leave**: Slides out to left with rotation (0° to -180°) and scale down

### Visual Effects
- Smooth cubic-bezier timing functions for natural movement
- Backdrop blur effect (10px) for modern glass-morphism look
- Shadow elevation on hover (4px → 8px)
- Scale transform on hover (1.05x) and active (1.02x)

Animations are implemented using Vue's `<Transition>` component and CSS keyframes.

## Accessibility
- **ARIA Label**: Button includes `aria-label="Scroll to top"` for screen readers
- **Keyboard Support**: Fully keyboard accessible (can be focused and activated with Enter/Space)
- **Focus States**: Clear focus indicators for keyboard navigation
- **Semantic HTML**: Uses proper `<button>` element
- **SVG Icon**: Uses semantic SVG with proper stroke and viewBox attributes

## SSR Notes
- **SSR-Safe**: No direct `window`/`document` access during module evaluation
- **Smart Guards**: Uses `typeof window !== 'undefined'` checks
- **Lifecycle Hooks**: Scroll listeners are added in `onMounted` hook
- **Cleanup**: Automatically removes event listeners in `onUnmounted`
- **Nuxt 3 Compatible**: Works seamlessly with Nuxt 3 out of the box
- **Hydration Safe**: No hydration mismatches

## Development
```bash
git clone https://github.com/TODOvue/tv-scroll-top.git
cd tv-scroll-top
npm install
npm run dev     # run demo playground
npm run build   # build library
```
Local demo served from Vite using `index.html` and demo examples in `src/demo`.

## Contributing
PRs and issues welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## License
MIT © TODOvue

### Attributions
Crafted for the TODOvue component ecosystem
