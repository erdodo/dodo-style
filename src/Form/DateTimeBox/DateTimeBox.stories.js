import DateTimeBox  from './DateTimeBox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Form/DateTimeBox',
  component: DateTimeBox,
  tags: ['autodocs'],
  argTypes: {
    children: {
        type: 'string',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Date = {
  args: {
    type:"date"
  }
}

export const DateTime = {
  args: {
    type:"datetime"
  }
}
export const Time = {
  args: {
    type:"time"
  }
}

export const Month = {
  args: {
    type:"month"
  }
}
export const Year = {
  args: {
    type:"year"
  }
}
