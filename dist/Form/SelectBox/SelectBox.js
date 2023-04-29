"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectBox;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bs = require("../../icons/bs");
var _bi = require("../../icons/bi");
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
//Tüm elemanlara özel css ve class isimleri tanımla
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
    search = _ref.search,
    max = _ref.max,
    maxShow = _ref.maxShow,
    placeholder = _ref.placeholder,
    style = _ref.style,
    clearable = _ref.clearable,
    hover = _ref.hover;
  var _id = new Date().getTime(); //Focus ayarları yapabilmek için selecte özel oluşturulan id
  var _React$useState = _react.default.useState(maxShow),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    _maxShow = _React$useState2[0],
    setMaxShow = _React$useState2[1]; // Gösterilecek maksimum tag sayısı içeride aç kapa yapabilmek için yapılan tanımlama
  var inputRef = _react.default.useRef(null); // Input elementine erişmek için oluşturulan ref (arama inputu)
  var _React$useState3 = _react.default.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    visible = _React$useState4[0],
    setVisible = _React$useState4[1]; // Seçeneklerin açık olup olmadığını tutan state
  var _React$useState5 = _react.default.useState([]),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    filteredOptions = _React$useState6[0],
    setFilteredOptions = _React$useState6[1]; // Arama inputuna göre filtrelenmiş seçeneklerin tutulduğu state
  var _React$useState7 = _react.default.useState(multiple ? [] : ""),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    _value = _React$useState8[0],
    setValue = _React$useState8[1]; // Seçilen değerlerin tutulduğu state
  var _React$useState9 = _react.default.useState([]),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    filteredTags = _React$useState10[0],
    setFilteredTags = _React$useState10[1]; // Gösterilecek maksimum tag sayısı içeride aç kapa yapabilmek için yapılan tanımlama
  var _React$useState11 = _react.default.useState(150),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    inputWidth = _React$useState12[0],
    setInputWidth = _React$useState12[1]; // Arama inputunun genişliğini tutan state / içine yazılan değere göre genişliği değişir
  var _React$useState13 = _react.default.useState(""),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    error = _React$useState14[0],
    setError = _React$useState14[1]; // Hata mesajı tutan state (max değer seçildi gibi)

  /*
  * Props olarak gelen rounded değerlerine göre class isimleri oluşturuluyor
  * */
  var _rounded = rounded ? "rounded-".concat(rounded) : 'rounded-md';
  if (rounded === '2xl') _rounded = 'rounded-[1rem]';
  if (rounded === '3xl') _rounded = 'rounded-[1.2rem]';

  /*
  * Props olarak gelen boyut değerine göre yazı ve yükseklik class isimleri oluşturuluyor
  * */
  var _size = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg ",
    xl: " text-xl ",
    "2xl": " text-2xl "
  };
  var _height = {
    sm: "min-h-[32px]",
    md: "min-h-[36px]",
    lg: "min-h-[46px] ",
    xl: "min-h-[44px] ",
    "2xl": "min-h-[58px] ",
    "3xl": "min-h-[66px] "
  };

  /*
  * Props olarak gelen disabled değerine göre class isimleri oluşturuluyor
  * */
  var _disabled = disabled && "opacity-50 cursor-not-allowed";
  _react.default.useEffect(function () {
    /*
    * Select dışında bir yere tıklandığında seçeneklerin kapanması için event listener ekleniyor
    * */
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
    /*
    * Props olarak gelen optionlar daha sonra içinde filter işlemi yapabilmek için state'e aktarılıyor
    * */
    if (options) {
      setFilteredOptions(options);
    }
  }, [options]);
  _react.default.useEffect(function () {
    /*
    * Props olarak gelen value değeri daha sonra değiştirebilmek için state'e aktarılıyor
     */
    setError("");
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
  _react.default.useEffect(function () {
    /*
    * Multiple değeri developlent ortamında değiştiği için her değişimde value state'i sıfırlanıyor
     */
    setValue(multiple ? [] : "");
  }, [multiple]);
  _react.default.useEffect(function () {
    /*
    * Props olarak gelen maxShow değerine göre gösterilecek tagler state'e aktarılıyor
     */
    _value && _value.length > 0 && setFilteredTags(_value.slice(0, maxShow));
    _value.length <= 0 && setFilteredTags([]);
  }, [_value]);
  _react.default.useEffect(function () {
    setMaxShow(maxShow);
  }, [maxShow]);
  var inputChange = function inputChange(e) {
    var _inputRef$current;
    /*
    * Arama inputuna yazıldığında çalışan fonksiyon
    * İnputun genişliğini ayarlamak için inputun genişliği state'e aktarılıyor
    * Arama inputuna yazılan değere göre filtreleme yapılıyor
    * Seçenekler görünür hale getiriliyor
     */
    setInputWidth((_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.scrollWidth);
    setValue("");
    var value = e.target.value;
    var filtered = options.filter(function (item) {
      return item.label.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredOptions(filtered);
    setVisible(true);
  };

  //Seçeneklerden birine tıklandığında çalışan fonksiyon
  var selectClick = function selectClick(value) {
    setError("");
    if (value) {
      //Seçeneklerden birine tıklandığında inputun içi boşaltılıyor
      if (search) document.getElementById(_id + '_searchInput').value = "";

      // max değer seçildiğinde hata mesajı gösteriliyor
      if (multiple && _value.length >= max && !_value.find(function (item) {
        return item.value === value.value;
      })) {
        setError("Maksimum " + max + " adet seçim yapabilirsiniz.");
        return;
      }

      // multiple değeri true ise seçilen değerler state'e aktarılıyor eğer varsa seçim iptal ediliyor
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
    }
  };
  var autoCompleteInputClick = function autoCompleteInputClick() {
    if (!disabled) setVisible(!visible);
    setTimeout(function () {
      inputRef.current && inputRef.current.focus();
    }, 100);
  };
  var clearValue = function clearValue() {
    setValue(multiple ? [] : "");
    onSelect(multiple ? [] : "");
  };
  var parentKeyDown = function parentKeyDown(e) {
    if (!visible) setVisible(true);
    var rules = [{
      key: ["ArrowDown", "ArrowRight", "Tab"],
      id: "_searchInput",
      nextEl: _id + "_option_0",
      action: function action(el, nextEl) {
        return nextFocus(el, nextEl);
      }
    }, {
      key: ["ArrowDown", "ArrowRight", "Tab"],
      id: "_option_" + e.target.tabIndex,
      nextEl: _id + "_option_" + (e.target.tabIndex + 1),
      action: function action(el, nextEl) {
        return nextFocus(el, nextEl);
      }
    }, {
      key: ["ArrowUp", "ArrowLeft", "Shift_Tab"],
      id: "_option_" + e.target.tabIndex,
      nextEl: _id + "_option_" + (e.target.tabIndex - 1),
      action: function action(el, nextEl) {
        return nextFocus(el, nextEl);
      }
    }, {
      key: ["ArrowUp", "ArrowLeft", "Shift_Tab"],
      id: "_option_0",
      nextEl: _id + "_searchInput",
      action: function action(el, nextEl) {
        return nextFocus(el, nextEl);
      }
    }, {
      key: ["ArrowUp", "ArrowLeft", "Shift_Tab"],
      id: "_searchInput",
      nextEl: _id + "_tag_" + (_value.length - 1),
      action: function action(el, nextEl) {
        return nextFocus(el, nextEl);
      }
    }, {
      key: ["ArrowDown", "ArrowRight", "Tab"],
      id: "_tag_" + (_value.length - 1),
      nextEl: _id + "_searchInput",
      action: function action(el, nextEl) {
        return nextFocus(el, nextEl);
      }
    }, {
      key: ["ArrowUp", "ArrowLeft", "Shift_Tab"],
      id: "_tag_" + e.target.tabIndex,
      nextEl: _id + "_tag_" + (e.target.tabIndex - 1),
      action: function action(el, nextEl) {
        return nextFocus(el, nextEl);
      }
    }, {
      key: ["ArrowDown", "ArrowRight", "Tab"],
      id: "_tag_" + e.target.tabIndex,
      nextEl: _id + "_tag_" + (e.target.tabIndex + 1),
      action: function action(el, nextEl) {
        return nextFocus(el, nextEl);
      }
    }, {
      key: ['Enter', ' '],
      id: "_option_" + e.target.tabIndex,
      nextEl: '',
      action: function action() {
        return selectItem(e.target.tabIndex);
      }
    }, {
      key: ['Enter', ' '],
      id: "_searchInput",
      nextEl: '',
      action: function action() {
        return selectItem(0);
      }
    }, {
      key: ['Escape'],
      id: "_searchInput",
      nextEl: '',
      action: function action() {
        return setVisible(false);
      }
    }, {
      key: ['Escape'],
      id: "_option_" + e.target.tabIndex,
      nextEl: '',
      action: function action() {
        return setVisible(false);
      }
    }, {
      key: ['Escape', "Backspace"],
      id: "_tag_" + e.target.tabIndex,
      nextEl: '',
      action: function action() {
        setVisible(false);
        selectItem(e.target.tabIndex);
        nextFocus(e.target, document.getElementById(_id + '_searchInput'));
      }
    }, {
      key: ['Backspace'],
      id: "_searchInput",
      nextEl: '',
      action: function action() {
        if (_value.length > 0 && document.getElementById(_id + '_searchInput').value === '') {
          nextFocus(document.getElementById(_id + '_searchInput'), document.getElementById(_id + '_tag_' + (_value.length - 1)));
        }
      }
    }];
    var isDefault = false;
    rules.forEach(function (rule) {
      if (rule.key.includes(e.shiftKey ? 'Shift_' + e.key : e.key) && _id + rule.id === e.target.id) {
        isDefault = true;
      }
    });
    if (e.key === "Backspace" && document.getElementById(_id + '_searchInput').value !== '') isDefault = false;
    isDefault && e.preventDefault();
    var nextFocus = function nextFocus(el, nextEl) {
      el && el.blur();
      nextEl && nextEl.focus();
    };
    var selectItem = function selectItem(index) {
      var option = filteredOptions[index];
      selectClick(option);
    };
    rules.forEach(function (rule) {
      if (rule.key.includes(e.shiftKey ? 'Shift_' + e.key : e.key) && _id + rule.id === e.target.id) {
        var nextEl = document.getElementById(rule.nextEl);
        rule.action(e.target, nextEl);
      }
    });
  };
  var parentMouseEnter = function parentMouseEnter() {
    hover && setVisible(true);
  };
  var parentMouseLeave = function parentMouseLeave() {
    hover && setVisible(false);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(classList, " ").concat(_size[size], " ").concat(_height[size], " ").concat(_disabled, " ").concat(_rounded, " relative border"),
    onKeyDown: parentKeyDown,
    style: style,
    onMouseEnter: parentMouseEnter,
    onMouseLeave: parentMouseLeave
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    value: JSON.stringify(_value)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(disabled ? 'cursor-not-allowed' : 'cursor-pointer', " flex flex-row items-center  ").concat(_height[size], " w-full autocomplete-input"),
    tabIndex: 0,
    onClick: autoCompleteInputClick
  }, (!_value || _value.length <= 0) && !search && /*#__PURE__*/_react.default.createElement("span", {
    className: "px-3 opacity-50"
  }, placeholder), /* Normal modda arama inputu */
  !multiple && search && /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: _id + '_searchInput',
    placeholder: placeholder,
    disabled: disabled,
    className: "px-3 focus-visible:outline-none w-full ".concat(_disabled),
    onChange: inputChange,
    value: _value.label
  }), multiple && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row  items-center w-full  flex-wrap"
  }, /*Max show kısıtlaması yokken tagler*/
  !_maxShow && _value && _value.map(function (item, index) {
    var _tag$props, _tag$props2;
    return /*#__PURE__*/_react.default.createElement("div", {
      tabIndex: index,
      id: _id + '_tag_' + index,
      className: "!m-[2px]"
    }, /*#__PURE__*/_react.default.createElement(_Tag.default, _extends({}, tag === null || tag === void 0 ? void 0 : tag.props, {
      size: size,
      id: _id + '_tag_' + index,
      type: tag !== null && tag !== void 0 && (_tag$props = tag.props) !== null && _tag$props !== void 0 && _tag$props.type ? tag === null || tag === void 0 ? void 0 : (_tag$props2 = tag.props) === null || _tag$props2 === void 0 ? void 0 : _tag$props2.type : "primary",
      classList: "autocomplete-input",
      close: true,
      onClose: function onClose() {
        return selectClick(item);
      }
    }), item.label));
  }), /*Max show kısıtlaması olan taglar*/
  _maxShow && _value && filteredTags.map(function (item, index) {
    var _tag$props3, _tag$props4;
    return /*#__PURE__*/_react.default.createElement("div", {
      tabIndex: index,
      id: _id + '_tag_' + index,
      className: "!m-[2px]"
    }, /*#__PURE__*/_react.default.createElement(_Tag.default, _extends({}, tag === null || tag === void 0 ? void 0 : tag.props, {
      size: size,
      id: _id + '_tag_' + index,
      type: tag !== null && tag !== void 0 && (_tag$props3 = tag.props) !== null && _tag$props3 !== void 0 && _tag$props3.type ? tag === null || tag === void 0 ? void 0 : (_tag$props4 = tag.props) === null || _tag$props4 === void 0 ? void 0 : _tag$props4.type : "primary",
      classList: "autocomplete-input",
      close: true,
      onClose: function onClose() {
        return selectClick(item);
      }
    }), item.label));
  }), /*Max show kısıtlaması iptal butonu*/
  maxShow && _maxShow && _value && _value.length > _maxShow && /*#__PURE__*/_react.default.createElement("span", {
    className: "px-3 w-fit h-full",
    onClick: function onClick() {
      return setMaxShow(false);
    },
    tabIndex: _value.length - 1,
    id: _id + "_tag_" + (_value.length - 1)
  }, /*#__PURE__*/_react.default.createElement(_bi.BiRightArrow, null)), /*Max show kısıtlaması yap butonu*/
  maxShow && !_maxShow && _value && _value.length > _maxShow && /*#__PURE__*/_react.default.createElement("span", {
    className: "px-3 w-fit",
    onClick: function onClick() {
      return setMaxShow(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_bi.BiLeftArrow, null)), /*Multiple modda arama inputu*/
  search && /*#__PURE__*/_react.default.createElement("input", {
    ref: inputRef,
    type: "text",
    id: _id + '_searchInput',
    disabled: disabled,
    style: {
      width: inputWidth + 'px'
    },
    onChange: inputChange,
    placeholder: placeholder,
    className: "".concat(_disabled, " px-3 bg-transparent focus-visible:outline-none min-w-60px max-w-[160px] ")
  })), /*Arama ve multiple kapalıyken seçilen verinin gösterildiği yazı*/
  !search && !multiple && /*#__PURE__*/_react.default.createElement("span", {
    className: "px-3 min-w-[100px] w-full ".concat(_disabled)
  }, _value.label), /*Arama kapalıyken bilerek bırakılan boşluk */
  !search && multiple && _value.length < 1 && /*#__PURE__*/_react.default.createElement("span", {
    className: "min-w-[100px] w-full"
  }), clearable && (multiple ? _value.length > 0 : _value) && /*#__PURE__*/_react.default.createElement("span", {
    className: "px-1 w-[30px]  ",
    onClick: clearValue
  }, /*#__PURE__*/_react.default.createElement(_bs.BsX, {
    className: "".concat(_size[size], " autocomplete-input")
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "px-1 w-[30px]  "
  }, /*Select menüsü kapalıyken gösterilen ikon*/
  !visible && /*#__PURE__*/_react.default.createElement(_bs.BsArrowDownShort, {
    className: "".concat(_size[size], " autocomplete-input")
  }), /*Select menüsü açıkken gösterilen ikon*/
  visible && /*#__PURE__*/_react.default.createElement(_bs.BsArrowUpShort, {
    className: "".concat(_size[size], " autocomplete-input")
  }))), visible && /*#__PURE__*/_react.default.createElement("div", {
    className: " absolute left-0 w-full z-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: " bg-white p-2 !mt-1  border  w-full rounded-md "
  }, filteredOptions.length > 0 ? Object.values(filteredOptions).map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: item.value,
      id: _id + '_option_' + index,
      tabIndex: index,
      onClick: function onClick() {
        return selectClick(item);
      },
      className: "py-1 px-3 hover:bg-gray-100 cursor-pointer mb-1 ".concat(_rounded, " ").concat(_value.value === item.value ? 'bg-gray-200 border' : '', " ").concat(multiple && _value.includes(item) ? 'bg-gray-200 border' : '')
    }, item.label, /*#__PURE__*/_react.default.createElement("input", {
      type: "hidden",
      value: item,
      id: _id + '_option_input_' + index
    }));
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "py-1 px-3 ".concat(_rounded)
  }, "Veri Bulunamad\u0131")))), error && /*#__PURE__*/_react.default.createElement("span", {
    className: "text-red-500 text-xs"
  }, error));
}
SelectBox.propTypes = {
  /** Uygulanmak istenen class listesi */
  classList: _propTypes.default.string,
  /** Köşe yumuşatma seviyesi */
  rounded: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
  /** Büyüklük */
  size: _propTypes.default.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  /** Disabled seçeneği */
  disabled: _propTypes.default.bool,
  /** Listelenecek veriler */
  options: _propTypes.default.array,
  /** Seçilen veri */
  onSelect: _propTypes.default.func,
  /** Varsayılan veri */
  value: _propTypes.default.any,
  /** Birden fazla seçilebilsin mi */
  multiple: _propTypes.default.bool,
  /** Hangi tag elemanı kullanılsın */
  tag: _propTypes.default.node,
  /** Arama Seçeneği olsun mu */
  search: _propTypes.default.bool,
  /** Inline style'ı */
  style: _propTypes.default.object,
  /** en fazla kaç veri seçilebilsin */
  max: _propTypes.default.number,
  /** en fazla kaç veri gösterilsin */
  maxShow: _propTypes.default.number,
  /** placeholder */
  placeholder: _propTypes.default.string,
  /** Temizleme butonu */
  clearable: _propTypes.default.bool,
  /** Hover durumunda menü açılsın mı */
  hover: _propTypes.default.bool
};
SelectBox.defaultProps = {
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
  size: "md",
  onSelect: function onSelect(value) {
    // eslint-disable-next-line no-console
    console.log('You have clicked me!', value);
  }
};