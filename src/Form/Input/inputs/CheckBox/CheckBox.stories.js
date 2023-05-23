import CheckBox  from './CheckBox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Form/Input/CheckBox - Switch',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {
      value:{
                type: 'string',
      },
      beforeLabel:{
          type:"string",
      },
        afterLabel:{
            type:"string",
        }
  },
};

