"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Test = void 0;
var _SelectBox = _interopRequireDefault(require("./SelectBox"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
var _default = {
  title: 'Örnekler/SelectBox',
  component: _SelectBox.default,
  tags: ['autodocs'],
  argTypes: {
    options: {
      defaultValue: [{
        value: "key1",
        label: "value 1"
      }, {
        value: "key2",
        label: "value 2"
      }, {
        value: "key3",
        label: "value 3"
      }]
    }
  },
  parameters: {
    options: {
      values: [{
        value: "key1",
        label: "value 1"
      }, {
        value: "key2",
        label: "value 2"
      }, {
        value: "key3",
        label: "value 3"
      }]
    }
  }
}; // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
exports.default = _default;
var Test = {
  args: {
    options: [{
      value: "key1",
      label: "value 1"
    }, {
      value: "key2",
      label: "value 2"
    }, {
      value: "key3",
      label: "value 3"
    }],
    placeholder: "Seçiniz"
  }
};
exports.Test = Test;