"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = void 0;
exports.default = Docs;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
//import * as Icons from './all.js'
var Icons = {};
function Docs() {
  var _React$useState = _react.default.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filteredIcon = _React$useState2[0],
    setFilteresIcons = _React$useState2[1];
  var filterIcon = function filterIcon(filter) {
    console.log(filter, filteredIcon);
    if (filter.length > 3) {
      var _filteredIcon = {};
      Object.keys(Icons).map(function (key) {
        if (key.toLowerCase().includes(filter.toLowerCase())) {
          _filteredIcon[key] = Icons[key];
        }
      });
      setFilteresIcons(_filteredIcon);
    } else {
      setFilteresIcons(null);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Search Icon",
    onChange: function onChange(e) {
      filterIcon(e.target.value);
    },
    style: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      marginBottom: "10px"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      width: "100%"
    }
  }, filteredIcon && Object.keys(filteredIcon).map(function (key) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundColor: "white",
        boxShadow: "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)",
        "width": "11%",
        margin: "0.7515%",
        padding: "10px 0",
        textAlign: "center"
      },
      onClick: function onClick() {
        navigator.clipboard.writeText(key);
        alert("Kopyalandı");
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "w-full flex flex-row items-center justify-center "
    }, createElement(key)), /*#__PURE__*/_react.default.createElement("span", {
      style: {
        fontSize: "11px",
        fontWeight: "200"
      }
    }, key));
  })));
}
var createElement = function createElement(name) {
  if (name === "default") return null;
  var Icon = Icons[name];
  return /*#__PURE__*/_react.default.createElement(Icon, {
    style: {
      fontSize: "50px",
      color: "#597aac"
    }
  });
};
exports.createElement = createElement;