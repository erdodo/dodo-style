import Button  from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
        type: 'string',
    },
    onClick: {
      table: {
        category: 'Olay',
      },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        children: 'Button',
      type:"primary"
    }
};

