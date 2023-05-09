import MessageBox  from './MessageBox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Örnekler/Geri Dönüt/MessageBox',
  component: MessageBox,
  tags: ['autodocs'],
  argTypes: {
    children: {
        type: 'string',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

