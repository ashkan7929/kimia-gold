import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: [
        '../stories/**/*.stories.@(ts|tsx|mdx)',
        '../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    staticDirs: ['../public'],
    addons: [
        '@chromatic-com/storybook',
        '@storybook/addon-docs',
        '@storybook/addon-onboarding',
        '@storybook/addon-a11y',
        '@storybook/addon-essentials',
        '@storybook/addon-vitest',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
};
export default config;
