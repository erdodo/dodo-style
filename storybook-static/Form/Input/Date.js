"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DateComp;
var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireWildcard(require("moment"));
require("moment/locale/tr");
var _bi = require("../../icons/bi");
var _bs = require("../../icons/bs");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
//TODO: şu tarihten öncesi sonrası gözükmesin,

function DateComp(_ref) {
  var className = _ref.className,
    value = _ref.value,
    onChange = _ref.onChange,
    showType = _ref.showType,
    _ref$displayFormat = _ref.displayFormat,
    displayFormat = _ref$displayFormat === void 0 ? "DD.MM.YYYY" : _ref$displayFormat,
    _ref$valueFormat = _ref.valueFormat,
    valueFormat = _ref$valueFormat === void 0 ? "YYYY-MM-DD" : _ref$valueFormat,
    hover = _ref.hover,
    min = _ref.min,
    max = _ref.max;
  var _min = min ? new Date((0, _moment.default)(min, valueFormat)) : null;
  var _max = max ? new Date((0, _moment.default)(max, valueFormat)) : null;
  var _React$useState = _react.default.useState(new Date()),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    dateNow = _React$useState2[0],
    setDateNow = _React$useState2[1];
  var _React$useState3 = _react.default.useState(""),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    inputValue = _React$useState4[0],
    setInputValue = _React$useState4[1];
  var _React$useState5 = _react.default.useState(["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"]),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    weekList = _React$useState6[0],
    setWeekList = _React$useState6[1];
  var _React$useState7 = _react.default.useState(["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    monthList = _React$useState8[0],
    setMonthList = _React$useState8[1];
  var ilkUcYil = "" + dateNow.getFullYear().toString().substring(0, 3);
  var _React$useState9 = _react.default.useState([ilkUcYil + "0", ilkUcYil + "1", ilkUcYil + "2", ilkUcYil + "3", ilkUcYil + "4", ilkUcYil + "5", ilkUcYil + "6", ilkUcYil + "7", ilkUcYil + "8", ilkUcYil + "9"]),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    yearList = _React$useState10[0],
    setYearList = _React$useState10[1];
  var _React$useState11 = _react.default.useState(showType ? showType : "day"),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    _showType = _React$useState12[0],
    setShowType = _React$useState12[1];
  var _React$useState13 = _react.default.useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    visible = _React$useState14[0],
    setVisible = _React$useState14[1];
  _react.default.useEffect(function () {
    _moment.default.locale('tr');
  }, []);
  _react.default.useEffect(function () {
    value && isValidDate((0, _moment.default)(value, valueFormat).format("MM/DD/YYYY")) && setDateNow(new Date((0, _moment.default)(value, valueFormat)));
    value && isValidDate((0, _moment.default)(value, valueFormat).format("MM/DD/YYYY")) && setInputValue((0, _moment.default)(value, valueFormat).format(displayFormat));
  }, [value]);
  _react.default.useEffect(function () {
    if (visible) {
      document.addEventListener("click", function (e) {
        if (e.target.closest(".date-input")) {
          return;
        }
        setVisible(false);
      });
    }
  }, [visible]);
  _react.default.useEffect(function () {
    onChange((0, _moment.default)(dateNow).format(valueFormat));
  }, [dateNow]);
  var isExtraDays = function isExtraDays(week, date) {
    if (week === 0 && date > 10) {
      return true;
    } else if (week === 5 && date < 10) {
      return true;
    } else if (week === 4 && date < 10) {
      return true;
    } else {
      return false;
    }
  };
  var setDate = function setDate(day, month, year) {
    isValidDate((0, _moment.default)([year, month, day]).format("MM/DD/YYYY")) && setDateNow((0, _moment.default)([year, month, day]).toDate());
    !isValidDate((0, _moment.default)([year, month, day]).format("MM/DD/YYYY")) && setDateNow((0, _moment.default)([year, month, 1]).toDate());
  };
  var getDate = function getDate(month) {
    var calendar = [];
    var startDate = (0, _moment.default)([dateNow.getFullYear(), month]).clone().startOf("month").startOf("week");
    var endDate = (0, _moment.default)([dateNow.getFullYear(), month]).clone().endOf("month");
    var day = startDate.clone().subtract(1, "day");

    // looping a month by a week
    while (day.isBefore(endDate, "day")) {
      calendar.push(Array(7).fill(0).map(function () {
        return day.add(1, "day").clone().format("DD");
      }));
    }
    if (calendar.length > 0) {
      return calendar.map(function (week, index) {
        return /*#__PURE__*/_react.default.createElement("tr", {
          className: "!border-none"
        }, week.map(function (day) {
          return /*#__PURE__*/_react.default.createElement("td", {
            className: "!px-2 !py-1 text-center !w-[20px] !h-[20px] !border-none !cursor-pointer hover:bg-gray-200 hover:rounded-sm",
            onClick: function onClick() {
              minMaxDisabled(month, day) && setDate(day, isExtraDays(index, day) && day > 15 ? month - 1 : isExtraDays(index, day) && day < 15 ? month + 1 : month, dateNow.getFullYear());
              minMaxDisabled(month, day) && setInputValue((0, _moment.default)([dateNow.getFullYear(), isExtraDays(index, day) && day > 15 ? month - 1 : isExtraDays(index, day) && day < 15 ? month + 1 : month, day]).format(displayFormat));
            }
          }, /*#__PURE__*/_react.default.createElement("span", {
            className: "!text-sm font-thin "
          }, /*Diğer aylardan taşan günler*/
          isExtraDays(index, day) ? /*#__PURE__*/_react.default.createElement("span", {
            className: "!text-sm text-gray-300 "
          }, day) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*Seçili Tarih*/
          dateNow.getDate() === parseInt(day) && dateNow.getMonth() === month ? /*#__PURE__*/_react.default.createElement("span", {
            className: "!text-sm text-blue-500"
          }, day) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*Min max'a takılan tarihler*/
          minMaxDisabled(month, day) ? /*#__PURE__*/_react.default.createElement("span", {
            className: "!text-sm text-red-100"
          }, day) : /*#__PURE__*/_react.default.createElement("span", {
            className: "!text-sm text-black"
          }, day)))));
        }));
      });
    }
  };
  var inputChange = function inputChange(e) {
    setInputValue(e.target.value);
    var inputDate = (0, _moment.default)(e.target.value, displayFormat).format("MM/DD/YYYY");
    var jsDate = new Date((0, _moment.default)(e.target.value, displayFormat).format(valueFormat));
    if (isValidDate(inputDate)) {
      console.log(jsDate, jsDate.getDate(), jsDate.getMonth(), jsDate.getFullYear());
      setDate(jsDate.getDate(), jsDate.getMonth(), jsDate.getFullYear());
    }
    //isValidDate(inputDate) && setDateNow(jsDate.getDate(),jsDate.getMonth(),jsDate.getFullYear())
  };

  var isValidDate = function isValidDate(dateString) {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false;

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month === 0 || month > 12) return false;
    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  };
  var setNewYearList = function setNewYearList(type) {
    if (type === 'before') {
      setYearList(yearList.map(function (item) {
        return item - 10;
      }));
    } else {
      setYearList(yearList.map(function (item) {
        return item + 10;
      }));
    }
  };
  var minMaxDisabled = function minMaxDisabled(month, day) {
    return (0, _moment.default)([dateNow.getFullYear(), month, day]).isBefore((0, _moment.default)([_min.getFullYear(), _min.getMonth(), _min.getDate()])) || (0, _moment.default)([dateNow.getFullYear(), month, day]).isAfter((0, _moment.default)([_max.getFullYear(), _max.getMonth(), _max.getDate()]));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative date-input",
    onClick: function onClick() {
      return setVisible(true);
    },
    onMouseEnter: function onMouseEnter() {
      return hover && setVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      return hover && setVisible(false);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react.default.createElement(_bs.BsCalendar3, {
    className: "absolute text-gray-400 !text-lg !ml-2 h-full"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "".concat(className, " pl-10"),
    value: inputValue,
    onChange: inputChange
  })), visible && /*#__PURE__*/_react.default.createElement("div", {
    className: "w-[290px] pt-1 absolute z-10 "
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "border bg-white mt-1 p-2 shadow-lg shadow-gray-300 w-full rounded-md"
  }, _showType === 'day' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row justify-between w-full items-center"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:bg-gray-100 p-2 rounded-full",
    onClick: function onClick() {
      setDate(dateNow.getDate(), 0, dateNow.getFullYear());
    }
  }, /*#__PURE__*/_react.default.createElement(_bi.BiFirstPage, null)), /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:bg-gray-100 p-2 rounded-full",
    onClick: function onClick() {
      return setDate(dateNow.getDate(), dateNow.getMonth() - 1, dateNow.getFullYear());
    }
  }, /*#__PURE__*/_react.default.createElement(_bi.BiChevronLeft, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:bg-gray-100 p-2 rounded-full",
    onClick: function onClick() {
      return setShowType("month");
    }
  }, (0, _moment.default)(dateNow).format(" MMMM")), /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:bg-gray-100 p-2 rounded-full",
    onClick: function onClick() {
      return setShowType("year");
    }
  }, (0, _moment.default)(dateNow).format(" YYYY"))), /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:bg-gray-100 p-2 rounded-full",
    onClick: function onClick() {
      return setDate(dateNow.getDate(), dateNow.getMonth() + 1, dateNow.getFullYear());
    }
  }, /*#__PURE__*/_react.default.createElement(_bi.BiChevronRight, null)), /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:bg-gray-100 p-2 rounded-full",
    onClick: function onClick() {
      return setDate(dateNow.getDate(), 11, dateNow.getFullYear());
    }
  }, /*#__PURE__*/_react.default.createElement(_bi.BiLastPage, null))), /*#__PURE__*/_react.default.createElement("table", {
    className: "!mb-2"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    className: "!w-[20px] !border-none bg-gray-50"
  }, weekList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: index,
      className: "text-center !text-sm !font-thin !px-2 !py-1 !border-none "
    }, item);
  }))), getDate(dateNow.getMonth()))), _showType === 'month' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row justify-between w-full items-center"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:bg-gray-100 p-2 rounded-full",
    onClick: function onClick() {
      return setDate(dateNow.getDate(), dateNow.getMonth(), dateNow.getFullYear() - 1);
    }
  }, /*#__PURE__*/_react.default.createElement(_bi.BiChevronLeft, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:bg-gray-100 p-2 rounded-full"
  }, (0, _moment.default)(dateNow).format(" MMMM")), /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:bg-gray-100 p-2 rounded-full",
    onClick: function onClick() {
      return setShowType("year");
    }
  }, (0, _moment.default)(dateNow).format(" YYYY"))), /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:bg-gray-100 p-2 rounded-full",
    onClick: function onClick() {
      return setDate(dateNow.getDate(), dateNow.getMonth(), dateNow.getFullYear() + 1);
    }
  }, /*#__PURE__*/_react.default.createElement(_bi.BiChevronRight, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "grid grid-cols-4"
  }, monthList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("button", {
      key: index,
      className: "".concat(index === dateNow.getMonth() ? 'bg-slate-300' : '', " col-span-1 mb-3 hover:bg-gray-100 p-1 rounded-md"),
      onClick: function onClick() {
        setDate(dateNow.getDate(), index, dateNow.getFullYear());
        setShowType("day");
        isValidDate((0, _moment.default)([dateNow.getFullYear(), index, dateNow.getDate()]).format("MM/DD/YYYY")) ? setInputValue((0, _moment.default)([dateNow.getFullYear(), index, dateNow.getDate()]).format(displayFormat)) : setInputValue((0, _moment.default)([dateNow.getFullYear(), index, 1]).format(displayFormat));
      }
    }, item);
  }))), _showType === 'year' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row justify-between w-full items-center"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:bg-gray-100 p-2 rounded-full",
    onClick: function onClick() {
      return setNewYearList('before');
    }
  }, /*#__PURE__*/_react.default.createElement(_bi.BiChevronLeft, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-row"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:bg-gray-100 p-2 rounded-full",
    onClick: function onClick() {
      return setShowType("month");
    }
  }, (0, _moment.default)(dateNow).format(" MMMM")), /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:bg-gray-100 p-2 rounded-full"
  }, (0, _moment.default)(dateNow).format(" YYYY"))), /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:bg-gray-100 p-2 rounded-full",
    onClick: function onClick() {
      return setNewYearList('after');
    }
  }, /*#__PURE__*/_react.default.createElement(_bi.BiChevronRight, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "grid grid-cols-4"
  }, yearList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("button", {
      key: index,
      className: "".concat(item === dateNow.getFullYear() ? 'bg-slate-300' : '', " col-span-1 mb-3 hover:bg-gray-100 p-1 rounded-md"),
      onClick: function onClick() {
        setDate(dateNow.getDate(), dateNow.getMonth(), item);
        setShowType("day");
        isValidDate((0, _moment.default)([item, dateNow.getMonth(), dateNow.getDate()]).format("MM/DD/YYYY")) ? setInputValue((0, _moment.default)([item, dateNow.getMonth(), dateNow.getDate()]).format(displayFormat)) : setInputValue((0, _moment.default)([item, dateNow.getMonth(), 1]).format(displayFormat));
      }
    }, item);
  })))))));
}