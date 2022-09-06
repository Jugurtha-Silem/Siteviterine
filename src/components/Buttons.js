import React from 'react';
import { NavLink } from 'react-router-dom';

const Buttons = (props) => {
    console.log(props);
    
    return (
        <div className="scroll-bottom">

            <NavLink  to={props.left} className="left hover"/>
                <span>&#10092;</span>
            <NavLink/>

            <NavLink  to={props.right} className="right hover"/>
                <span>&#10093;</span>
            <NavLink/>

        </div>
    );
};

export default Buttons;