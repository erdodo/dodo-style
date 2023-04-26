"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Badge;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Component is described here.
 *
 */
function Badge(_ref) {
  var classList = _ref.classList,
    type = _ref.type,
    onClick = _ref.onClick,
    disabled = _ref.disabled,
    children = _ref.children,
    size = _ref.size,
    outline = _ref.outline,
    plain = _ref.plain,
    rounded = _ref.rounded,
    link = _ref.link;
  var _rounded = rounded ? "rounded-".concat(rounded) : 'rounded-md';
  var _classList = {
    sm: "py-1 px-2 text-sm ",
    md: "py-2 px-4 text-md",
    lg: "py-3 px-6  text-lg ",
    xl: "py-4 px-8 text-xl ",
    "2xl": "py-5 px-10 text-2xl "
  };
  var _type = "";
  var types = {
    primary: 'bg-sky-700 text-white border border-sky-900',
    secondary: 'bg-slate-700 text-white border border-slate-900',
    danger: 'bg-red-700 text-white border border-red-900',
    warning: 'bg-yellow-500 text-white border border-yellow-900',
    success: 'bg-green-700 text-white border border-green-900',
    info: 'bg-blue-700 text-white border border-blue-900',
    light: 'bg-gray-200 text-gray-700 border border-gray-500',
    dark: 'bg-gray-800 text-white border border-gray-900'
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
  if (outline) {
    _type = outlineTypes[type];
  } else if (plain) {
    _type = plainTypes[type];
  } else {
    _type = types[type];
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(classList, " ").concat(_classList[size], " ").concat(_rounded, " ").concat(_type),
    onClick: onClick
  }, children));
}
Badge.propTypes = {
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
  /** Buton link olsun mu */
  link: _propTypes.default.bool,
  /** Buton köşe yumuşak olsun mu */
  rounded: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
  /** Buton büyüklüğü */
  size: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  /** Buton disable olsun mu */
  disabled: _propTypes.default.bool,
  /** Gets called when the user clicks on the button */
  onClick: _propTypes.default.func
};
Badge.defaultProps = {
  children: 'Button',
  size: "md",
  onClick: function onClick(event) {
    // eslint-disable-next-line no-console
    console.log('You have clicked me!', event.target);
  }
};