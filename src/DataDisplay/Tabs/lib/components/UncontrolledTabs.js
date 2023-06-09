/* eslint-disable */
import PropTypes from "prop-types";
import React, { cloneElement, useRef, useId } from "react";
import cx from "clsx";
import { childrenPropType } from "../helpers/propTypes";
import { getTabsCount as getTabsCountHelper } from "../helpers/count";
import { deepMap } from "../helpers/childrenDeepMap";
import { isTabList, isTabPanel, isTab } from "../helpers/elementTypes";
function isNode(node) {
  return node && "getAttribute" in node;
}
function isTabNode(node) {
  return isNode(node) && node.getAttribute("data-rttab");
}
function isTabDisabled(node) {
  return isNode(node) && node.getAttribute("aria-disabled") === "true";
}
let canUseActiveElement;
function determineCanUseActiveElement(environment) {
  const env =
    environment || (typeof window !== "undefined" ? window : undefined);
  try {
    canUseActiveElement = !!(
      typeof env !== "undefined" &&
      env.document &&
      env.document.activeElement
    );
  } catch (e) {
    canUseActiveElement = false;
  }
}
const defaultProps = { className: "react-tabs", focus: false };
const propTypes ={
        children: childrenPropType,
        direction: PropTypes.oneOf(["rtl", "ltr"]),
        className: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.array,
          PropTypes.object,
        ]),
        disabledTabClassName: PropTypes.string,
        disableUpDownKeys: PropTypes.bool,
        disableLeftRightKeys: PropTypes.bool,
        domRef: PropTypes.func,
        focus: PropTypes.bool,
        forceRenderTabPanel: PropTypes.bool,
        onSelect: PropTypes.func.isRequired,
        selectedIndex: PropTypes.number.isRequired,
        selectedTabClassName: PropTypes.string,
        selectedTabPanelClassName: PropTypes.string,
        environment: PropTypes.object,
      }
const UncontrolledTabs = (props) => {
  let tabNodes = useRef([]);
  let tabIds = useRef([]);
  const ref = useRef();
  function setSelected(index, event) {
    if (index < 0 || index >= getTabsCount()) return;
    const { onSelect, selectedIndex } = props;
    onSelect(index, selectedIndex, event);
  }
  function getNextTab(index) {
    const count = getTabsCount();
    for (let i = index + 1; i < count; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    for (let i = 0; i < index; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return index;
  }
  function getPrevTab(index) {
    let i = index;
    while (i--) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    i = getTabsCount();
    while (i-- > index) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return index;
  }
  function getFirstTab() {
    const count = getTabsCount();
    for (let i = 0; i < count; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return null;
  }
  function getLastTab() {
    let i = getTabsCount();
    while (i--) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return null;
  }
  function getTabsCount() {
    const { children } = props;
    return getTabsCountHelper(children);
  }
  function getTab(index) {
    return tabNodes.current[`tabs-${index}`];
  }
  function getChildren() {
    let index = 0;
    const {
      children,
      disabledTabClassName,
      focus,
      forceRenderTabPanel,
      selectedIndex,
      selectedTabClassName,
      selectedTabPanelClassName,
      environment,
    } = props;
    tabIds.current = tabIds.current || [];
    let diff = tabIds.current.length - getTabsCount();
    const id = useId();
    while (diff++ < 0) {
      tabIds.current.push(`${id}${tabIds.current.length}`);
    }
    return deepMap(children, (child) => {
      let result = child;
      if (isTabList(child)) {
        let listIndex = 0;
        let wasTabFocused = false;
        if (canUseActiveElement == null) {
          determineCanUseActiveElement(environment);
        }
        const env =
          environment || (typeof window !== "undefined" ? window : undefined);
        if (canUseActiveElement && env) {
          wasTabFocused = React.Children.toArray(child.props.children)
            .filter(isTab)
            .some((tab, i) => env.document.activeElement === getTab(i));
        }
        result = cloneElement(child, {
          children: deepMap(child.props.children, (tab) => {
            const key = `tabs-${listIndex}`;
            const selected = selectedIndex === listIndex;
            const props = {
              tabRef: (node) => {
                tabNodes.current[key] = node;
              },
              id: tabIds.current[listIndex],
              selected,
              focus: selected && (focus || wasTabFocused),
            };
            if (selectedTabClassName)
              props.selectedClassName = selectedTabClassName;
            if (disabledTabClassName)
              props.disabledClassName = disabledTabClassName;
            listIndex++;
            return cloneElement(tab, props);
          }),
        });
      } else if (isTabPanel(child)) {
        const props = {
          id: tabIds.current[index],
          selected: selectedIndex === index,
        };
        if (forceRenderTabPanel) props.forceRender = forceRenderTabPanel;
        if (selectedTabPanelClassName)
          props.selectedClassName = selectedTabPanelClassName;
        index++;
        result = cloneElement(child, props);
      }
      return result;
    });
  }
  function handleKeyDown(e) {
    const { direction, disableUpDownKeys, disableLeftRightKeys } = props;
    if (isTabFromContainer(e.target)) {
      let { selectedIndex: index } = props;
      let preventDefault = false;
      let useSelectedIndex = false;
      if (
        e.code === "Space" ||
        e.keyCode === 32 ||
        e.code === "Enter" ||
        e.keyCode === 13
      ) {
        preventDefault = true;
        useSelectedIndex = false;
        handleClick(e);
      }
      if (
        (!disableLeftRightKeys &&
          (e.keyCode === 37 || e.code === "ArrowLeft")) ||
        (!disableUpDownKeys && (e.keyCode === 38 || e.code === "ArrowUp"))
      ) {
        if (direction === "rtl") {
          index = getNextTab(index);
        } else {
          index = getPrevTab(index);
        }
        preventDefault = true;
        useSelectedIndex = true;
      } else if (
        (!disableLeftRightKeys &&
          (e.keyCode === 39 || e.code === "ArrowRight")) ||
        (!disableUpDownKeys && (e.keyCode === 40 || e.code === "ArrowDown"))
      ) {
        if (direction === "rtl") {
          index = getPrevTab(index);
        } else {
          index = getNextTab(index);
        }
        preventDefault = true;
        useSelectedIndex = true;
      } else if (e.keyCode === 35 || e.code === "End") {
        index = getLastTab();
        preventDefault = true;
        useSelectedIndex = true;
      } else if (e.keyCode === 36 || e.code === "Home") {
        index = getFirstTab();
        preventDefault = true;
        useSelectedIndex = true;
      }
      if (preventDefault) {
        e.preventDefault();
      }
      if (useSelectedIndex) {
        setSelected(index, e);
      }
    }
  }
  function handleClick(e) {
    let node = e.target;
    do {
      if (isTabFromContainer(node)) {
        if (isTabDisabled(node)) {
          return;
        }
        const index = [].slice
          .call(node.parentNode.children)
          .filter(isTabNode)
          .indexOf(node);
        setSelected(index, e);
        return;
      }
    } while ((node = node.parentNode) != null);
  }
  function isTabFromContainer(node) {
    if (!isTabNode(node)) {
      return false;
    }
    let nodeAncestor = node.parentElement;
    do {
      if (nodeAncestor === ref.current) return true;
      if (nodeAncestor.getAttribute("data-rttabs")) break;
      nodeAncestor = nodeAncestor.parentElement;
    } while (nodeAncestor);
    return false;
  }
  const {
    children,
    className,
    disabledTabClassName,
    domRef,
    focus,
    forceRenderTabPanel,
    onSelect,
    selectedIndex,
    selectedTabClassName,
    selectedTabPanelClassName,
    environment,
    disableUpDownKeys,
    disableLeftRightKeys,
    ...attributes
  } = { ...defaultProps, ...props };
  return React.createElement(
    "div",
    Object.assign({}, attributes, {
      className: cx(className),
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      ref: (node) => {
        ref.current = node;
        if (domRef) domRef(node);
      },
      "data-rttabs": true,
    }),
    getChildren()
  );
};
UncontrolledTabs.propTypes =propTypes
export default UncontrolledTabs;
