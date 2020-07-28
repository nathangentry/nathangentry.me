import React from 'react';

import './IconBullet.scss';

const IconBullet = props => {
    return (
        <div className='icon-bullet-container'>
            <div className='point-container opacity-bg'>
                <i className='material-icons primary-color'>{props.icon}</i>
            </div>
            <p>{props.text}</p>
        </div>
    );
}

export default IconBullet;