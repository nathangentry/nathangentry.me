import React from 'react';

import heroImage from '../../assets/heroImage.png';
import './HeroImageTile.scss';

const HeroImageTile = props => {
    return (
        <div id='hero-image-tile' style={{ backgroundColor: props.opacityColor }}>
            <svg viewBox="0 0 550 555" fill="none" preserveAspectRatio="xMidYMid slice">
                <path d="M273.507 474.301L249.73 494.98C257.19 501.735 260.403 506.833 263.409 514.224L272.226 526.254L273.081 537.387L276.011 539.931L273.081 554.05H324.161L323.131 544.957L321.457 541.07L323.131 539.661L323.992 528.279L341.628 492.951C334.712 481.756 328.348 476.114 316.273 470.357C299.44 470.295 290.067 470.924 273.507 474.301Z" fill={props.primaryColor} />
            </svg>
            <img id='hero-image' src={heroImage} alt='Nathan Gentry professional headshot' />
        </div>
    );
};

export default HeroImageTile;