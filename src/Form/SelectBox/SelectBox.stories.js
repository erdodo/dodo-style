import SelectBox  from './SelectBox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Form/SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
  argTypes: {
    options:{
      defaultValue: [{value:"key1",label:"value 1"},{value:"key2",label:"value 2"},{value:"key3",label:"value 3"}],

    },
  },
  parameters: {
    options: {
      values:
        [{value:"key1",label:"value 1"},{value:"key2",label:"value 2"},{value:"key3",label:"value 3"}]

    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const SelectBoxDefault={
    args:{}
}
