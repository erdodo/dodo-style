import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import cx from "clsx";
const DEFAULT_CLASS = "react-tabs__tab";
const defaultProps = {
  className: DEFAULT_CLASS,
  disabledClassName: `${DEFAULT_CLASS}--disabled`,
  focus: false,
  id: null,
  selected: false,
  selectedClassName: `${DEFAULT_CLASS}--selected`,
};
const propTypes ={
        children: PropTypes.oneOfType([
          PropTypes.array,
          PropTypes.object,
          PropTypes.string,
        ]),
        className: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.array,
          PropTypes.object,
        ]),
        disabled: PropTypes.bool,
        disabledClassName: PropTypes.string,
        focus: PropTypes.bool,
        id: PropTypes.string,
        selected: PropTypes.bool,
        selectedClassName: PropTypes.string,
        tabIndex: PropTypes.string,
        tabRef: PropTypes.func,
      }
const Tab = (props) => {
  let nodeRef = useRef();
  const {
    children,
    className,
    disabled,
    disabledClassName,
    focus,
    id,
    selected,
    selectedClassName,
    tabIndex,
    tabRef,
    ...attributes
  } = { ...defaultProps, ...props };
  useEffect(() => {
    if (selected && focus) {
      nodeRef.current.focus();
    }
  }, [selected, focus]);
  return React.createElement(
    "li",
    Object.assign({}, attributes, {
      className: cx(className, {
        [selectedClassName]: selected,
        [disabledClassName]: disabled,
      }),
      ref: (node) => {
        nodeRef.current = node;
        if (tabRef) tabRef(node);
      },
      role: "tab",
      id: `tab${id}`,
      "aria-selected": selected ? "true" : "false",
      "aria-disabled": disabled ? "true" : "false",
      "aria-controls": `panel${id}`,
      tabIndex: tabIndex || (selected ? "0" : null),
      "data-rttab": true,
    }),
    children
  );
};
Tab.propTypes = propTypes;
Tab.tabsRole = "Tab";
export default Tab;
