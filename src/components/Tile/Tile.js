import React from 'react';

import './Tile.scss';

const Tile = React.forwardRef((props, ref) => {
    return (
        <div className={`Tile ${props.className} ${props.wide ? 'wide' : ''}`} id={props.id} ref={ref} onClick={props.onClick}>
            {props.children}
        </div>
    );
})

export default Tile;