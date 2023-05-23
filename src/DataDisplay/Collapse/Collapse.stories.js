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
