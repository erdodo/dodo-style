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

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Test = {
    args: {

    }
}
