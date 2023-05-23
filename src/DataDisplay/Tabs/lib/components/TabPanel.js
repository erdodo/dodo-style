import PropTypes from "prop-types";
import React from "react";
import cx from "clsx";
const DEFAULT_CLASS = "react-tabs__tab-panel";
const defaultProps = {
  className: DEFAULT_CLASS,
  forceRender: false,
  selectedClassName: `${DEFAULT_CLASS}--selected`,
};
const propTypes ={
        children: PropTypes.node,
        className: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.array,
          PropTypes.object,
        ]),
        forceRender: PropTypes.bool,
        id: PropTypes.string,
        selected: PropTypes.bool,
        selectedClassName: PropTypes.string,
      }
const TabPanel = (props) => {
  const {
    children,
    className,
    forceRender,
    id,
    selected,
    selectedClassName,
    ...attributes
  } = { ...defaultProps, ...props };
  return React.createElement(
    "div",
    Object.assign({}, attributes, {
      className: cx(className, { [selectedClassName]: selected }),
      role: "tabpanel",
      id: `panel${id}`,
      "aria-labelledby": `tab${id}`,
    }),
    forceRender || selected ? children : null
  );
};
TabPanel.tabsRole = "TabPanel";
TabPanel.propTypes =propTypes
export default TabPanel;
