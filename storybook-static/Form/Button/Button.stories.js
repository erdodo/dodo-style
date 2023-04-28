"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Small = exports.Secondary = exports.Primary = exports.Large = void 0;
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
var _default = {
  title: 'Example/Button',
  component: _Button.default,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
}; // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
exports.default = _default;
var Primary = {
  args: {
    type: "primary",
    children: 'Button'
  }
};
exports.Primary = Primary;
var Secondary = {
  args: {
    children: 'Button'
  }
};
exports.Secondary = Secondary;
var Large = {
  args: {
    size: 'lg',
    children: 'Button'
  }
};
exports.Large = Large;
var Small = {
  args: {
    size: 'sm',
    children: 'Button'
  }
};
exports.Small = Small;