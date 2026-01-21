import Default from './demos/default.vue?raw';
import Left from './demos/left.vue?raw';
import LowThreshold from './demos/low-threshold.vue?raw';
import HighThreshold from './demos/high-threshold.vue?raw';
import LeftCustomThreshold from './demos/left-custom-threshold.vue?raw';
import VeryHighThreshold from './demos/very-high-threshold.vue?raw';
import ScrollUpOnly from './demos/scroll-up-only.vue?raw';

export const demos = [
  {
    id: 1,
    title: 'Right Position (Default)',
    description: 'Scroll to top button positioned in the bottom right corner with a default threshold of 300px.',
    propsData: {
      position: 'right',
    },
    html: Default,
  },
  {
    id: 2,
    title: 'Left Position',
    description: 'Scroll to top button positioned in the bottom left corner with a default threshold of 300px.',
    propsData: {
      position: 'left',
    },
    html: Left,
  },
  {
    id: 3,
    title: 'Low Threshold (100px)',
    description: 'Appears quickly after scrolling. The button is displayed when the user scrolls down only 100 pixels.',
    propsData: {
      position: 'right',
      threshold: 100,
    },
    html: LowThreshold,
  },
  {
    id: 4,
    title: 'High Threshold (600px)',
    description: 'Appears only after significant scrolling. The button is displayed when the user scrolls down 600 pixels.',
    propsData: {
      position: 'right',
      threshold: 600,
    },
    html: HighThreshold,
  },
  {
    id: 5,
    title: 'Left with Custom Threshold',
    description: 'Combination of left position with a 200px threshold to appear earlier than the default value.',
    propsData: {
      position: 'left',
      threshold: 200,
    },
    html: LeftCustomThreshold,
  },
  {
    id: 6,
    title: 'Very High Threshold (1000px)',
    description: 'Ideal for very long pages. The button only appears after scrolling down 1000 pixels.',
    propsData: {
      position: 'right',
      threshold: 1000,
    },
    html: VeryHighThreshold,
  },
  {
    id: 7,
    title: 'Show on Scroll Up Only',
    description: 'The button only appears when scrolling up. Perfect for avoiding content obstruction while the user is reading down the page.',
    propsData: {
      position: 'right',
      showOnScrollUp: true,
    },
    html: ScrollUpOnly,
  },
];
