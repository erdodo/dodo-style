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

