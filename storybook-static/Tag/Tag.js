"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tag;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bs = require("react-icons/bs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//TODO: Kapatma seçeneği ekle
/**
 * Özel yazılar için kullanılabilir
 *
 */
function Tag(_ref) {
  var classList = _ref.classList,
    type = _ref.type,
    onClick = _ref.onClick,
    children = _ref.children,
    size = _ref.size,
    outline = _ref.outline,
    plain = _ref.plain,
    rounded = _ref.rounded,
    close = _ref.close,
    onClose = _ref.onClose;
  var _rounded = rounded ? "rounded-".concat(rounded) : 'rounded-md';
  var _size = {
    sm: "py-0.5 px-1 text-sm ",
    md: "py-1 px-1.5 text-sm ",
    lg: "py-1.5 px-2.5 text-md",
    xl: "py-2 px-3.5  text-lg ",
    "2xl": "py-2.5 px-5 text-xl ",
    "3xl": "py-3 px-6 text-2xl "
  };
  var _type = "";
  var types = {
    primary: 'bg-sky-600 text-white  border border-sky-700 shadow-sky-300 shadow-lg  ',
    secondary: 'bg-slate-600 text-white border border-slate-700 shadow-slate-300 shadow-lg ',
    danger: 'bg-red-600 text-white border border-red-700 shadow-red-300 shadow-lg',
    warning: 'bg-yellow-600 text-white border border-yellow-700 shadow-yellow-300 shadow-lg',
    success: 'bg-green-600 text-white border border-green-700 shadow-green-300 shadow-lg',
    info: 'bg-blue-600 text-white border border-blue-700 shadow-blue-300 shadow-lg',
    light: 'bg-gray-600 text-white border border-gray-700 shadow-gray-300 shadow-lg',
    dark: 'bg-gray-700 text-white border border-gray-800 shadow-gray-300 shadow-lg'
  };
  var outlineTypes = {
    primary: 'bg-transparent text-sky-700 border border-sky-700 ',
    secondary: 'bg-transparent text-slate-700 border border-slate-700 ',
    danger: 'bg-transparent text-red-700 border border-red-700',
    warning: 'bg-transparent text-yellow-700 border border-yellow-700',
    success: 'bg-transparent text-green-700 border border-green-700',
    info: 'bg-transparent text-blue-700 border border-blue-700',
    light: 'bg-transparent text-gray-700 border border-gray-700',
    dark: 'bg-transparent text-gray-700 border border-gray-700'
  };
  var plainTypes = {
    primary: 'bg-sky-200 text-sky-900 border border-sky-500',
    secondary: 'bg-slate-200 text-slate-900 border border-slate-500',
    danger: 'bg-red-200 text-red-900 border border-red-500',
    warning: 'bg-yellow-200 text-yellow-900 border border-yellow-500',
    success: 'bg-green-200 text-green-900 border border-green-500',
    info: 'bg-blue-200 text-blue-900 border border-blue-500',
    light: 'bg-gray-200 text-gray-900 border border-gray-500',
    dark: 'bg-gray-700 text-gray-100 border border-gray-500'
  };
  var _closeButtonsize = {
    sm: "text-sm ",
    md: " text-sm ",
    lg: "text-md",
    xl: "text-lg ",
    "2xl": "text-xl ",
    "3xl": "text-2xl "
  };
  var _closeType = "";
  var closeTypes = {
    primary: 'text-white px-0 py-0 hover:shadow-sky-400 hover:shadow-md rounded-full cursor-pointer',
    secondary: 'text-white px-0 py-0 hover:shadow-slate-400 hover:shadow-md rounded-full cursor-pointer',
    danger: 'text-white px-0 py-0 hover:shadow-red-400 hover:shadow-md rounded-full cursor-pointer',
    warning: 'text-white px-0 py-0 hover:shadow-yellow-400 hover:shadow-md rounded-full cursor-pointer',
    success: 'text-white px-0 py-0 hover:shadow-green-400 hover:shadow-md rounded-full cursor-pointer',
    info: 'text-white px-0 py-0 hover:shadow-blue-400 hover:shadow-md rounded-full cursor-pointer',
    light: 'text-black px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer',
    dark: 'text-white px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer'
  };
  var closeOutlineTypes = {
    primary: 'text-sky-900 px-0 py-0 hover:shadow-sky-400 hover:shadow-md rounded-full cursor-pointer',
    secondary: 'text-slate-900 px-0 py-0 hover:shadow-slate-400 hover:shadow-md rounded-full cursor-pointer',
    danger: 'text-red-900 px-0 py-0 hover:shadow-red-400 hover:shadow-md rounded-full cursor-pointer',
    warning: 'text-yellow-900 px-0 py-0 hover:shadow-yellow-400 hover:shadow-md rounded-full cursor-pointer',
    success: 'text-green-900 px-0 py-0 hover:shadow-green-400 hover:shadow-md rounded-full cursor-pointer',
    info: 'text-blue-900 px-0 py-0 hover:shadow-blue-400 hover:shadow-md rounded-full cursor-pointer',
    light: 'text-gray-900 px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer',
    dark: 'text-gray-900 px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer'
  };
  var closePlainTypes = {
    primary: 'text-sky-900 px-0 py-0 hover:shadow-sky-400 hover:shadow-md rounded-full cursor-pointer',
    secondary: 'text-slate-900 px-0 py-0 hover:shadow-slate-400 hover:shadow-md rounded-full cursor-pointer',
    danger: 'text-red-900 px-0 py-0 hover:shadow-red-400 hover:shadow-md rounded-full cursor-pointer',
    warning: 'text-yellow-900 px-0 py-0 hover:shadow-yellow-400 hover:shadow-md rounded-full cursor-pointer',
    success: 'text-green-900 px-0 py-0 hover:shadow-green-400 hover:shadow-md rounded-full cursor-pointer',
    info: 'text-blue-900 px-0 py-0 hover:shadow-blue-400 hover:shadow-md rounded-full cursor-pointer',
    light: 'text-gray-900 px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer',
    dark: 'text-gray-900 px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer'
  };
  if (outline) {
    _type = outlineTypes[type];
  } else if (plain) {
    _type = plainTypes[type];
  } else {
    _type = types[type];
  }
  if (close && outline) {
    _closeType = closeOutlineTypes[type];
  } else if (close && plain) {
    _closeType = closePlainTypes[type];
  } else if (close) {
    _closeType = closeTypes[type];
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(classList, " ").concat(_size[size], " ").concat(_rounded, " ").concat(_type, " flex flex-row items-center"),
    onClick: onClick
  }, children, close && /*#__PURE__*/_react.default.createElement(_bs.BsXCircle, {
    onClick: onClose,
    className: "ml-2  ".concat(_closeButtonsize[size], " ").concat(_closeType)
  })));
}
Tag.propTypes = {
  /** Buton içerine yazılacak yazılar */
  children: _propTypes.default.node.isRequired,
  /** Buton class'ı */
  classList: _propTypes.default.string,
  /** Buton tipi */
  type: _propTypes.default.oneOf(['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']),
  /** Buton sadece borderlardan oluşsun mu */
  outline: _propTypes.default.bool,
  /** Buton arka planı daha açık olsun mu */
  plain: _propTypes.default.bool,
  /** Buton köşe yumuşak olsun mu */
  rounded: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
  /** Buton büyüklüğü */
  size: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  /** Kapatma seçeneği ekle */
  close: _propTypes.default.bool,
  /** Gets called when the user clicks on the button */
  onClick: _propTypes.default.func,
  /** Tag kapatma fonksiyonu */
  onClose: _propTypes.default.func
};
Tag.defaultProps = {
  children: 'Button',
  size: "md",
  onClick: function onClick(event) {
    // eslint-disable-next-line no-console
    console.log('You have clicked me!', event.target);
  }
};