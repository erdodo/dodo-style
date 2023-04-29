"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = void 0;
exports.default = Docs;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Docs(_ref) {
  var name = _ref.name;
  var _React$useState = _react.default.useState({}),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    allIcons = _React$useState2[0],
    setAllIcons = _React$useState2[1];
  var _React$useState3 = _react.default.useState({}),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    filteredIcon = _React$useState4[0],
    setFilteresIcons = _React$useState4[1];
  var _React$useState5 = _react.default.useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    selectedIcon = _React$useState6[0],
    setSelectedIcon = _React$useState6[1];
  var _React$useState7 = _react.default.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    dialog = _React$useState8[0],
    setDialog = _React$useState8[1];
  var _React$useState9 = _react.default.useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    kopyalandi = _React$useState10[0],
    setKopyalandi = _React$useState10[1];
  var filterIcon = function filterIcon(filter) {
    (function (specifier) {
      return new Promise(function (r) {
        return r(specifier);
      }).then(function (s) {
        return _interopRequireWildcard(require(s));
      });
    })("./".concat(name, "/index.js")).then(function (Icons) {
      setAllIcons(Icons);
      var _filteredIcon = {};
      Object.keys(Icons).map(function (key) {
        if (key.toLowerCase().includes(filter.toLowerCase())) {
          _filteredIcon[key] = Icons[key];
        }
      });
      setFilteresIcons(_filteredIcon);
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full flex flex-row"
  }, /*#__PURE__*/_react.default.createElement("input", {
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
      marginRight: "10px"
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-slate-500 rounded-lg px-3 py-1 ml-3 text-white",
    onClick: function onClick() {
      return filterIcon('');
    }
  }, "T\xFCm\xFC")), /*#__PURE__*/_react.default.createElement("div", {
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
        setDialog(true);
        setSelectedIcon(key);
        setKopyalandi(false);
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "w-full flex flex-row items-center justify-center !text-5xl"
    }, createElement(key, allIcons)), /*#__PURE__*/_react.default.createElement("span", {
      style: {
        fontSize: "11px",
        fontWeight: "200"
      }
    }, key));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative"
  }, dialog && /*#__PURE__*/_react.default.createElement("div", {
    className: " w-screen h-screen top-0 left-0 bg-gray-50/60 flex flex-row items-center justify-center",
    style: {
      position: "fixed"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-white shadow-lg border rounded-lg shadow-gray-400 p-4"
  }, /*#__PURE__*/_react.default.createElement("h1", null, selectedIcon), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full flex flex-row items-center justify-center !text-9xl p-4"
  }, createElement(selectedIcon, allIcons)), /*#__PURE__*/_react.default.createElement("pre", {
    style: {
      margin: "20px 10px"
    },
    className: "!bg-white !p-2 !shadow !border"
  }, /*#__PURE__*/_react.default.createElement("code", {
    className: "lang-js"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-blue-400"
  }, "import "), /*#__PURE__*/_react.default.createElement("span", null, "{"), /*#__PURE__*/_react.default.createElement("span", {
    className: "hljs-attribute"
  }, selectedIcon), /*#__PURE__*/_react.default.createElement("span", null, "}"), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-blue-400"
  }, " from "), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-red-400"
  }, "\"@erdodocomp/dodo-style/dist/icons/", name, "\""), ";")), /*#__PURE__*/_react.default.createElement("div", {
    className: "!mt-3 flex justify-between w-full flex-row"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: " ".concat(kopyalandi ? 'bg-green-500' : 'bg-slate-500', "  rounded-lg px-3 py-1 ml-3 text-white"),
    onClick: function onClick() {
      navigator.clipboard.writeText(selectedIcon);
      setKopyalandi(true);
    }
  }, "Kopyala"), /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-slate-500 rounded-lg px-3 py-1 ml-3 text-white",
    onClick: function onClick() {
      setDialog(false);
    }
  }, "Kapat"))))));
}
var createElement = function createElement(name, allIcons) {
  if (name === "default") return null;
  var Icon = allIcons[name];
  return /*#__PURE__*/_react.default.createElement(Icon, {
    style: {
      color: "#597aac"
    }
  });
};
exports.createElement = createElement;