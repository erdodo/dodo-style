import MessageBox  from './MessageBox';
import Button from '../../Form/Button/Button';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Geri Dönüt/MessageBox',
  component: MessageBox,
  tags: ['autodocs'],
  argTypes: {
    children: {
        type: 'string',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Test = {
  args: {
    children: <Button type={"primary"} >Message Box</Button>,
  }
};
