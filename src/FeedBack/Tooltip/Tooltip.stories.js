import Tooltip  from './Tooltip';
import Button from '../../Form/Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Geri Dönüt/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    children: {
        type: 'string',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args



export const Test={
  args: {
    parentClassList:"m-48",
    children: <Button type={"primary"}>Hover</Button>,
  }
}
