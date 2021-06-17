import React from 'react';


function Button({label, classes, type, handleClick}) {
    return (
        <button className={classes} type={type} onClick={handleClick} data-testid="btn">
            {label}
        </button>
    );
}

export default Button;