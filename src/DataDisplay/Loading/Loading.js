import React from 'react';
import PropTypes from 'prop-types';
import "./loading.css";


let typeList = []
for (let i = 1; i <=119;i++) {
    typeList.push(i)
}
export default function Loading(props) {
    const styleTypes = {
        "primary": "#556EE4",
        "secondary": "#D946EE",
        "info":"#50A5F1",
        "danger":"#EB4848",

    }

    return (
        <>
            <span style={{"--loader-brand":styleTypes[props.styleType]}} className={"loader-"+props.type}></span>
        </>
    );
}

Loading.propTypes = {
    type:PropTypes.oneOfType(typeList),
    styleType:PropTypes.oneOf(["primary"]),
};

Loading.defaultProps = {
    styleType:"primary",
};
