import React from 'react';

import './Section.scss';

const Section = props => {
    return (
        <div className={`Section${props.className ? ` ${props.className}` : ''}`} id={props.id}>
            <h3 className='title'>{props.title}</h3>
            {props.children}
        </div>
    );
}

export default Section;