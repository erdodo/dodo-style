"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Test = void 0;
var _Input = _interopRequireDefault(require("./Input"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
var _default = {
  title: 'Örnekler/Input',
  component: _Input.default,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string'
    }
  }
}; // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
exports.default = _default;
var Test = {};
exports.Test = Test;