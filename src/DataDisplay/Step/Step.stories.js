import Step  from './Step';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Örnekler/Veri Gösterimi/Step',
  component: Step,
  tags: ['autodocs'],
  argTypes: {
    children: {
        type: 'string',
    },
  },
};

