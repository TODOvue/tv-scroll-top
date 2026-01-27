# Changelog

All notable changes to `@todovue/tv-scroll-top` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] - 2026-01-27

### Changed
- Simplified the file list in `package.json` to include only essential assets.
- Simplified the build configuration by removing demo-specific logic.
- Enhanced GitHub Actions workflows to automate npm package publishing and GitHub release creation.
- Moved the `@todovue/tv-demo` component import from main.js to `Demo.vue` to localize its usage.
- Updated build commands to include `README.md` and `CHANGELOG.md` files in the public directory during the build process.

### Added
- Included the `src` directory in the `package.json` files list to ensure component source files are bundled in the package distribution.

### Removed
- Eliminated the global import of the `@todovue/tv-demo` component from `main.js`.

### Dependencies
- Updated `@todovue/tv-demo` to `^1.4.11`.
- Updated `vue` to `^3.5.27`.
- Updated `sass` to `^1.97.3`.

## [1.0.2] - 2026-01-21

### Added
- New `showOnScrollUp` prop to only display the button when scrolling up
- Scroll direction detection in `useScrollTop` composable

### Dependencies
- Updated `@todovue/tv-demo` to `^1.4.4`.
- Updated `sass` to `^1.97.2`.
- Updated `vite` to `^7.3.1`.

## [1.0.0] - 2025-12-30

### Added
- Initial release of TvScrollTop component
- Core scroll-to-top button functionality with smooth scroll behavior
- Configurable visibility `threshold` prop (default: 300px)
- Position variants: `left` and `right` placement options
- Beautiful entrance/exit animations with rotation and bounce effects
- Position-specific animations (right: slides from right with clockwise rotation, left: slides from left with counter-clockwise rotation)
- Backdrop blur effect for modern glass-morphism UI
- Hover and active state interactions with scale transforms
- Shadow elevation effects on hover
- `useScrollTop` composable for custom implementations
- SSR-safe implementation with proper window/document guards
- Nuxt 3 module support (`@todovue/tv-scroll-top/nuxt`)
- TypeScript support with full type definitions
- Accessibility features:
  - ARIA label for screen readers
  - Keyboard navigation support
  - Semantic button element
  - Focus indicators
- Automatic scroll event listener management with cleanup
- Vue 3 Transition component integration
- Zero runtime dependencies
- Tree-shakeable ES module build
- CommonJS build for compatibility
- Comprehensive documentation and examples

[1.0.3]: https://github.com/TODOvue/tv-scroll-top/pull/3/files
[1.0.2]: https://github.com/TODOvue/tv-scroll-top/pull/2/files
[1.0.0]: https://github.com/TODOvue/tv-scroll-top/pull/1/files
