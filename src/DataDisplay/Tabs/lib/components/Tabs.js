/* eslint-disable */
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  childrenPropType,
  onSelectPropType,
  selectedIndexPropType,
} from "../helpers/propTypes";
import UncontrolledTabs from "./UncontrolledTabs";
import { getTabsCount } from "../helpers/count";
const MODE_CONTROLLED = 0;
const MODE_UNCONTROLLED = 1;
const propTypes ={
        children: childrenPropType,
        className: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.array,
          PropTypes.object,
        ]),
        defaultFocus: PropTypes.bool,
        defaultIndex: PropTypes.number,
        direction: PropTypes.oneOf(["rtl", "ltr"]),
        disabledTabClassName: PropTypes.string,
        disableUpDownKeys: PropTypes.bool,
        disableLeftRightKeys: PropTypes.bool,
        domRef: PropTypes.func,
        environment: PropTypes.object,
        focusTabOnClick: PropTypes.bool,
        forceRenderTabPanel: PropTypes.bool,
        onSelect: onSelectPropType,
        selectedIndex: selectedIndexPropType,
        selectedTabClassName: PropTypes.string,
        selectedTabPanelClassName: PropTypes.string,
      }
const defaultProps = {
  defaultFocus: false,
  focusTabOnClick: true,
  forceRenderTabPanel: false,
  selectedIndex: null,
  defaultIndex: null,
  environment: null,
  disableUpDownKeys: false,
  disableLeftRightKeys: false,
};
const getModeFromProps = (props) => {
  return props.selectedIndex === null ? MODE_UNCONTROLLED : MODE_CONTROLLED;
};
const checkForIllegalModeChange = (props, mode) => {
  if (
    process.env.NODE_ENV !== "production" &&
    mode != undefined &&
    mode !== getModeFromProps(props)
  ) {
    throw new Error(`Switching between controlled mode (by using \`selectedIndex\`) and uncontrolled mode is not supported in \`Tabs\`.
For more information about controlled and uncontrolled mode of react-tabs see https://github.com/reactjs/react-tabs#controlled-vs-uncontrolled-mode.`);
  }
};
const Tabs = (props) => {
  const {
    children,
    defaultFocus,
    defaultIndex,
    focusTabOnClick,
    onSelect,
    ...attributes
  } = { ...defaultProps, ...props };
  const [focus, setFocus] = useState(defaultFocus);
  const [mode] = useState(getModeFromProps(attributes));
  const [selectedIndex, setSelectedIndex] = useState(
    mode === MODE_UNCONTROLLED ? defaultIndex || 0 : null
  );
  useEffect(() => {
    setFocus(false);
  }, []);
  if (mode === MODE_UNCONTROLLED) {
    const tabsCount = getTabsCount(children);
    useEffect(() => {
      if (selectedIndex != null) {
        const maxTabIndex = Math.max(0, tabsCount - 1);
        setSelectedIndex(Math.min(selectedIndex, maxTabIndex));
      }
    }, [tabsCount]);
  }
  checkForIllegalModeChange(attributes, mode);
  const handleSelected = (index, last, event) => {
    if (typeof onSelect === "function") {
      if (onSelect(index, last, event) === false) return;
    }
    if (focusTabOnClick) {
      setFocus(true);
    }
    if (mode === MODE_UNCONTROLLED) {
      setSelectedIndex(index);
    }
  };
  let subProps = { ...props, ...attributes };
  subProps.focus = focus;
  subProps.onSelect = handleSelected;
  if (selectedIndex != null) {
    subProps.selectedIndex = selectedIndex;
  }
  delete subProps.defaultFocus;
  delete subProps.defaultIndex;
  delete subProps.focusTabOnClick;
  return React.createElement(UncontrolledTabs, subProps, children);
};
Tabs.propTypes =propTypes;
Tabs.tabsRole = "Tabs";
export default Tabs;
