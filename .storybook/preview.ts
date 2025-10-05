import type { Preview } from '@storybook/react';
// import '../index.css';
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      disable: false,

    },
  },
};

export default preview;
