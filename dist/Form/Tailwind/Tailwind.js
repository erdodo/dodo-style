"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tailwind;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*
*Tailwind hatalarını düzeltmek için oluşturulmuştur
 */
function Tailwind() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "\n        rounded-full rounded-xl rounded-lg rounded-sm bg-slate-500 bg-sky-500 !px-0 !px-1 !py-1 !px-2 !py-2\n        text-yellow-200 px-6 px-5 !p-4 !px-6 !py-6 shadow-blue-600 flex-col fixed\n        bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500\n        transition ease-in-out delay-150 duration-300 transform hover:-translate-y-1 hover:scale-110\n        "
  });
}