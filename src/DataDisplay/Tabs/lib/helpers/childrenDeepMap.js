"use strict";exports.__esModule=true;exports.deepForEach=deepForEach;exports.deepMap=deepMap;var _react=require("react");var _elementTypes=require("./elementTypes");function isTabChild(child){return(0,_elementTypes.isTab)(child)||(0,_elementTypes.isTabList)(child)||(0,_elementTypes.isTabPanel)(child)}function deepMap(children,callback){return _react.Children.map(children,child=>{if(child===null)return null;if(isTabChild(child)){return callback(child)}if(child.props&&child.props.children&&typeof child.props.children==="object"){return(0,_react.cloneElement)(child,{...child.props,children:deepMap(child.props.children,callback)})}return child})}function deepForEach(children,callback){return _react.Children.forEach(children,child=>{if(child===null)return;if((0,_elementTypes.isTab)(child)||(0,_elementTypes.isTabPanel)(child)){callback(child)}else if(child.props&&child.props.children&&typeof child.props.children==="object"){if((0,_elementTypes.isTabList)(child))callback(child);deepForEach(child.props.children,callback)}})}