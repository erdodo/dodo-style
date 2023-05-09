import NavBar  from './NavBar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Örnekler/Veri Gösterimi/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  argTypes: {
    children: {
        type: 'string',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

