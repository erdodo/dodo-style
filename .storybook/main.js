/** @type { import('@storybook/react-webpack5').StorybookConfig } */


const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    'storybook-dark-mode',
    "@storybook/addon-mdx-gfm",
    '@storybook/addon-toolbars',
    '@storybook/addon-docs'],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  staticDirs: ["../assets"]
};
export default config;
