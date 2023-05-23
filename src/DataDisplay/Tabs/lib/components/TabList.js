import PropTypes from "prop-types";
import React from "react";
import cx from "clsx";
const defaultProps = { className: "react-tabs__tab-list" };
const propTypes = {
        children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        className: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.array,
          PropTypes.object,
        ]),
      }
const TabList = (props) => {
  const { children, className, ...attributes } = { ...defaultProps, ...props };
  return React.createElement(
    "ul",
    Object.assign({}, attributes, {
      className: cx(className),
      role: "tablist",
    }),
    children
  );
};
TabList.tabsRole = "TabList";
TabList.propTypes = propTypes
export default TabList;
