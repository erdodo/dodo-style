import Collapse  from './Collapse';
import CollapseItem from './CollapseItem';

export default {
  title: 'Veri Gösterimi/Collapse',
  component:CollapseItem,
    argTypes: {
      title: {
        type:"string",
      },
        content: {
            type:"string",
        },
        downIcon: {
            type:"string",
        }
    }

};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const CollapseItemStory = (args) =>
    <Collapse>
      <CollapseItem {...args} />
    </Collapse>
;
