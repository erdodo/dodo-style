"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconContext = exports.DefaultContext = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
exports.DefaultContext = DefaultContext;
var IconContext = _react.default.createContext && /*#__PURE__*/_react.default.createContext(DefaultContext);
exports.IconContext = IconContext;