import React from 'react';
import PropTypes from 'prop-types';
import CollapseItem from "./CollapseItem";
export default function Collapse({accordion,children,...props}) {

    const [active, setActive] = React.useState([""]);
    const clickChild=(index)=>{
        if(accordion || children.length === undefined){
            if(active === index) {
                setActive("")
            }
                else{
                    setActive(index)
                }

        }else{
            if(active.includes(index)){
                setActive(active.filter((item)=>item!==index))
            }else{
                setActive([...active,index])
            }
        }

    }

    return (
        <>
            <div className={"w-full"} {...props}>
                {children && children.length !== undefined  && children.map((child,index)=>(
                     <div key={"dodo-collapse-child"+index}>
                         <CollapseItem onClick={()=>clickChild(("child"+index))}
                                       active={active.includes(("child"+index))} index={"dodo-collapse-child"+index} {...child.props} />
                     </div>

                 ))}
                {children && children.length === undefined  &&
                    <CollapseItem onClick={()=>clickChild("child1")}
                                active={active.includes("child1")} index={"dodo-collapse-child1"} {...children.props} />
                }


            </div>


        </>
    );
}


Collapse.propTypes = {
    children:PropTypes.node,
    accordion:PropTypes.bool,
};

Collapse.defaultProps = {

};
