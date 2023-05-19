import Carousel  from './Carousel';

import "./example/example1.css"
const images = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

const child =  images.map((image, index) => (
    <div key={index} className="example1">
      <div style={{ 'backgroundImage': `url(${image})` }}>
        <span>Slide {index + 1}</span>
      </div>
    </div>
))
export default {
  title: 'Veri Gösterimi/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  args: {
    children: child
  },
  argTypes: {
    children: {
        type: 'string',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Template = (args) => <Carousel {...args} />;
