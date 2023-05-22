import Collapse  from './Collapse';
import CollapseItem from './CollapseItem';
import CollapseItemStory from './CollapseItem.stories';
const childs=[

    `<CollapseItem title={"Title 1"} content={"Content 1"} />`,
    `<CollapseItem title={"Title 1"} content={"Content 1"} />`

]

export default {
  title: 'Veri Gösterimi/Collapse',
  component:Collapse,
  render:()=>(
        <Collapse>
            <CollapseItem title={"Title 1"} content={"Content 1"} />
            <CollapseItem title={"Title 2"} content={"Content 2"} />
        </Collapse>
    ),
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CollapseStory = (args) => <Collapse {...args} >
    <CollapseItem title={"Title 1"} content={"Content 1"} />
    <CollapseItem title={"Title 2"} content={"Content 2"} />
    </Collapse>
    ;
