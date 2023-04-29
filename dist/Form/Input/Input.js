"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Input;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bs = require("../../icons/bs");
var _Date = _interopRequireDefault(require("./Date"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
//todo: min,max,buttonVisible,errorVisible,step,placeholder,maxLength,minLength,passVisible
/**
 * Input Componenti
 *
 */
function Input(_ref) {
  var classList = _ref.classList,
    type = _ref.type,
    onClick = _ref.onClick,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    value = _ref.value,
    size = _ref.size,
    notOutline = _ref.notOutline,
    rounded = _ref.rounded,
    style = _ref.style,
    styleType = _ref.styleType,
    displayFormat = _ref.displayFormat,
    valueFormat = _ref.valueFormat,
    hover = _ref.hover,
    min = _ref.min,
    max = _ref.max;
  var _id = new Date().getTime();
  var _React$useState = _react.default.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    _value = _React$useState2[0],
    setValue = _React$useState2[1];
  var _React$useState3 = _react.default.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    error = _React$useState4[0],
    setError = _React$useState4[1];

  //Baş: Stil İşlemleri
  var _rounded = rounded ? "rounded-".concat(rounded) : 'rounded-md';
  if (rounded === '2xl') _rounded = 'rounded-[1rem]';
  if (rounded === '3xl') _rounded = 'rounded-[1.2rem]';
  var _size = {
    sm: "py-1 px-2  text-sm ",
    md: "py-2 px-4  text-md",
    lg: "py-3 px-6  text-lg ",
    xl: "py-4 px-8 text-xl ",
    "2xl": "py-5 px-10 text-2xl "
  };
  var _notOutline = notOutline && "!border-[transparent] ";
  var _type = "";
  var defaultStyleTypes = {
    default: 'bg-white text-gray-900 border border-gray-300 shadow-gray-300 shadow-lg'
  };
  if (styleType === 'default') {
    _type = defaultStyleTypes.default;
  }
  //Son: Stil İşlemleri

  _react.default.useEffect(function () {
    setValue(value);
  }, [value]);
  _react.default.useEffect(function () {
    setError(null);
    setValue(null);
  }, [type]);
  _react.default.useEffect(function () {
    onChange(_value);
  }, [_value]);
  var onChangeInput = function onChangeInput(event) {
    if (type === "email" && !validateEmail(event.target.value)) setError("Geçerli bir email adresi giriniz");
    if (type === "email" && validateEmail(event.target.value)) setError("");
    setValue(event.target.value);
    onChange(event.target.value);
  };
  var validateEmail = function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col"
  }, type === 'date' && /*#__PURE__*/_react.default.createElement(_Date.default, {
    className: "".concat(classList, " ").concat(_size[size], " ").concat(_rounded, " ").concat(_notOutline, " ").concat(_type, "  w-full"),
    value: value,
    onChange: setValue,
    showType: "day",
    displayFormat: displayFormat,
    valueFormat: valueFormat,
    hover: hover,
    min: min,
    max: max
  }), !['date'].includes(type) && /*#__PURE__*/_react.default.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "".concat(classList, " ").concat(_size[size], " ").concat(_rounded, " ").concat(_notOutline, " ").concat(_type, "  w-full"),
    type: type,
    value: _value,
    style: style,
    onClick: onClick,
    disabled: disabled,
    onChange: onChangeInput,
    id: _id + '_input',
    min: min,
    max: max
  }), type === "number" && /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute right-0 top-0 bottom-0 flex items-center justify-center px-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700",
    onClick: function onClick() {
      return setValue(Number(_value) + 1);
    }
  }, /*#__PURE__*/_react.default.createElement(_bs.BsArrowUpSquareFill, {
    className: "text-gray-400"
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "text-gray-500 hover:text-gray-700 mt-0.5 focus:outline-none focus:text-gray-700",
    onClick: function onClick() {
      return setValue(_value - 1);
    }
  }, /*#__PURE__*/_react.default.createElement(_bs.BsArrowDownSquareFill, {
    className: "text-gray-400"
  }))))), /*#__PURE__*/_react.default.createElement("span", null, _value), error && /*#__PURE__*/_react.default.createElement("span", {
    className: "text-red-500 text-sm"
  }, error));
}
Input.propTypes = {
  /** Child elemanı */
  value: _propTypes.default.string,
  /** Uygulanmak istenen class listesi */
  classList: _propTypes.default.string,
  /** Tip */
  type: _propTypes.default.oneOf(["text", "password", "email", "number", "date", "time", "datetime-local", "month", "week", "search", "tel", "url", "color"]),
  /** Hiçbir border olmasın */
  notOutline: _propTypes.default.bool,
  /** Stil tipi */
  styleType: _propTypes.default.oneOf(['default']),
  /** Köşe yumuşatma seviyesi */
  rounded: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full']),
  /** Büyüklük */
  size: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  /** Disabled seçeneği */
  disabled: _propTypes.default.bool,
  /** Tıklandığında çalışacak method */
  onClick: _propTypes.default.func,
  /** Değiştiğinde çalışacak method */
  onChange: _propTypes.default.func,
  /** Butonun inline style'ı */
  style: _propTypes.default.object,
  /** Görüntüleme formatı (date) */
  displayFormat: _propTypes.default.string,
  /** Değer formatı (date) */
  valueFormat: _propTypes.default.string,
  /** Hover */
  hover: _propTypes.default.bool,
  /** Alabileceği en az değer */
  min: _propTypes.default.number,
  /** Alabileceği en fazla değer */
  max: _propTypes.default.number
};
Input.defaultProps = {
  value: 'Button',
  size: "md",
  type: "text",
  styleType: 'default',
  displayFormat: 'DD.MM.YYYY',
  valueFormat: 'YYYY-MM-DD',
  onClick: function onClick(event) {
    console.log('You have clicked me!', event.target);
  },
  onChange: function onChange(event) {
    console.log('You have changed me!', event);
  }
};