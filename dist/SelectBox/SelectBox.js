"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectBox;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bs = require("react-icons/bs");
var _Tag = _interopRequireDefault(require("../Tag"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
//TODO: Hover olduğunda açılsın seçeneği
/**
 * Select componenti, options prop'u ile gelen verileri selectbox içerisinde gösterir.
 *
 */
function SelectBox(_ref) {
  var classList = _ref.classList,
    size = _ref.size,
    rounded = _ref.rounded,
    disabled = _ref.disabled,
    options = _ref.options,
    onSelect = _ref.onSelect,
    value = _ref.value,
    multiple = _ref.multiple,
    tag = _ref.tag,
    search = _ref.search;
  var inputRef = _react.default.useRef(null);
  var _React$useState = _react.default.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    visible = _React$useState2[0],
    setVisible = _React$useState2[1];
  var _React$useState3 = _react.default.useState([]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    filteredOptions = _React$useState4[0],
    setFilteredOptions = _React$useState4[1];
  var _React$useState5 = _react.default.useState(multiple ? [] : ""),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    _value = _React$useState6[0],
    setValue = _React$useState6[1];
  var _React$useState7 = _react.default.useState(50),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    inputWidth = _React$useState8[0],
    setInputWidth = _React$useState8[1];
  var _rounded = rounded ? "rounded-".concat(rounded) : 'rounded-md';
  var _size = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg ",
    xl: " text-xl ",
    "2xl": " text-2xl "
  };
  var _height = {
    sm: "h-[32px]",
    md: "h-[36px]",
    lg: "h-[46px] ",
    xl: " h-[44px] ",
    "2xl": " h-[58px] ",
    "3xl": " h-[66px] "
  };
  var _disabled = disabled && "opacity-50 cursor-not-allowed";
  _react.default.useEffect(function () {
    console.log(tag === null || tag === void 0 ? void 0 : tag.props);
    if (visible) {
      document.addEventListener("click", function (e) {
        if (e.target.closest(".autocomplete-input")) {
          return;
        }
        setVisible(false);
      });
    }
  }, [visible]);
  _react.default.useEffect(function () {
    if (options) {
      setFilteredOptions(options);
    }
  }, [options]);
  _react.default.useEffect(function () {
    if (multiple) {
      if (value) {
        setValue(value.map(function (item) {
          return options.find(function (option) {
            return option.value === item;
          });
        }));
      }
    } else {
      if (value) {
        setValue(options.find(function (option) {
          return option.value === value;
        }));
      }
    }
  }, [value]);
  var inputChange = function inputChange(e) {
    setInputWidth(inputRef.current.scrollWidth);
    var value = e.target.value;
    var filtered = options.filter(function (item) {
      return item.label.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredOptions(filtered);
    setVisible(true);
  };
  var selectClick = function selectClick(value) {
    console.log(value);
    if (multiple) {
      var _values = _toConsumableArray(_value);
      if (_value.find(function (item) {
        return item.value === value.value;
      })) {
        _values = _values.filter(function (item) {
          return item.value !== value.value;
        });
      } else {
        _values.push(value);
      }
      setValue(_values);
      onSelect(_values.map(function (item) {
        return item.value;
      }));
      return;
    } else {
      setValue(value);
      onSelect(value.value);
      return;
    }
  };
  var autoCompleteInputClick = function autoCompleteInputClick() {
    if (!disabled) setVisible(!visible);
    setTimeout(function () {
      inputRef.current && inputRef.current.focus();
    }, 100);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(classList, " ").concat(_size[size], " ").concat(_height[size], " ").concat(_disabled, " ").concat(_rounded, " relative border")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(disabled ? 'cursor-not-allowed' : 'cursor-pointer', " flex flex-row items-center h-full w-full autocomplete-input"),
    onClick: autoCompleteInputClick
  }, !multiple && search && /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    disabled: disabled,
    className: "px-3 focus-visible:outline-none ".concat(_disabled),
    onChange: inputChange,
    value: _value.label
  }), multiple && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row  items-center w-full  flex-wrap"
  }, _value.map(function (item, index) {
    var _tag$props, _tag$props2;
    return /*#__PURE__*/_react.default.createElement(_Tag.default, _extends({}, tag === null || tag === void 0 ? void 0 : tag.props, {
      size: size,
      type: tag !== null && tag !== void 0 && (_tag$props = tag.props) !== null && _tag$props !== void 0 && _tag$props.type ? tag === null || tag === void 0 ? void 0 : (_tag$props2 = tag.props) === null || _tag$props2 === void 0 ? void 0 : _tag$props2.type : "primary",
      classList: "m-[2px]",
      close: true,
      onClose: function onClose() {
        return selectClick(item);
      }
    }), item.label)
    /*<div key={item.value} className={`flex flex-row items-center py-1 px-3 m-1 bg-gray-200 rounded-md`}>
        <span className={`m-1`}>{item.label}</span>
        <span className={`cursor-pointer`} onClick={()=>selectClick(item)}>x</span>
    </div>*/;
  }), search && /*#__PURE__*/_react.default.createElement("input", {
    ref: inputRef,
    type: "text",
    disabled: disabled,
    className: "".concat(_disabled, " px-3 bg-transparent focus-visible:outline-none min-w-60px max-w-[160px] "),
    style: {
      width: inputWidth + 'px'
    },
    onChange: inputChange
  })), !search && !multiple && /*#__PURE__*/_react.default.createElement("span", {
    className: "px-3 w-[100px] ".concat(_disabled)
  }, _value.label), !search && multiple && _value.length < 1 && /*#__PURE__*/_react.default.createElement("span", {
    className: "w-[100px]"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "px-1 w-[30px]  "
  }, !visible && /*#__PURE__*/_react.default.createElement(_bs.BsArrowDownShort, {
    className: "".concat(_size[size], " autocomplete-input")
  }), visible && /*#__PURE__*/_react.default.createElement(_bs.BsArrowUpShort, {
    className: "".concat(_size[size], " autocomplete-input")
  }))), visible && /*#__PURE__*/_react.default.createElement("div", {
    className: " bg-white p-2 absolute border left-0 z-10 w-full rounded-md mt-1"
  }, filteredOptions.length > 0 ? Object.values(filteredOptions).map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: item.value,
      onClick: function onClick() {
        return selectClick(item);
      },
      className: "py-1 px-3 hover:bg-gray-100 cursor-pointer ".concat(_rounded, " ").concat(_value.value === item.value ? 'bg-gray-200 border' : '', " ").concat(multiple && _value.includes(item) ? 'bg-gray-200 border' : '')
    }, item.label);
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "py-1 px-3 ".concat(_rounded)
  }, "Veri Bulunamad\u0131"))));
}
SelectBox.propTypes = {
  /** AutoComplete class'ı */
  classList: _propTypes.default.string,
  /** AutoComplete köşe yumuşak olsun mu */
  rounded: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
  /** AutoComplete büyüklüğü */
  size: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  /** AutoComplete disable olsun mu */
  disabled: _propTypes.default.bool,
  /** AutoComplete options */
  options: _propTypes.default.array,
  /** selected value */
  onSelect: _propTypes.default.func,
  /** selected value */
  value: _propTypes.default.any,
  /** multiple */
  multiple: _propTypes.default.bool,
  /** tag */
  tag: _propTypes.default.node,
  /** search */
  search: _propTypes.default.bool
};
SelectBox.defaultProps = {
  options: [],
  size: "md",
  onSelect: function onSelect(value) {
    // eslint-disable-next-line no-console
    console.log('You have clicked me!', value);
  }
};