import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
return (
        <button onClick={props.cancel} className={classes.All + " " + classes[props.type]}>
        {props.children}
        </button>
    );
}

export default Button;