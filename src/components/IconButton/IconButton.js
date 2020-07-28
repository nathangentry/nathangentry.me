import React from 'react';

import './IconButton.scss';

const IconButton = React.forwardRef((props, ref) => {
    return (
        <button className={`IconButton ${props.className}`} onClick={props.onClick} ref={ref}>
            <i className='material-icons'>{props.icon}</i>
        </button>
    );
})

export default IconButton;