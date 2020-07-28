import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Tile from './Tile';

import './WelcomeTile.scss';

const WelcomeTile = props => {
    return (
        <Tile className='WelcomeTile' wide>
            <h1 className='title'>
                {props.name !== null && <span style={{ color: props.primaryColor }}>Hey {props.name}! </span>}
                I'm Nathan, and I craft delightful experiences for the web.
            </h1>
            <p className='large'>
                I combine the best of design and development to create web projects that are beautiful — not only at first glance but also after further (code) review.
            </p>
            {props.name === null ?
                <div className='button-group'>
                    <Link smooth to='#contact'><button className='primary'>Get in touch</button></Link>
                    <a href='https://bit.ly/resume_fall2020' target='_blank' rel='noopener noreferrer'><button className='secondary'>View my resume</button></a>
                </div>
                :
                <>
                    <p className='large'>
                        Currently, I’m searching for a Web Development, UI, or UX internship for the summer of 2021 and would love to work at {props.name}.
                    </p>
                    <h4>Why am I a good fit?</h4>
                    <p className='large'>{props.fit}</p>
                    <h4>How am I different?</h4>
                    <p className='large'>{props.different}</p>
                    <h4>Why do I want to work at {props.name}?</h4>
                    <p className='large'>{props.motivation}</p>
                    <h4>Want to see more?</h4>
                    <p className='large'>You can either check out my portfolio by scrolling down, or <a href='https://bit.ly/resume_fall2020' target='_blank' rel='noopener noreferrer'>view my condensed resume here.</a></p>
                    <h4>Ready to move forward?</h4>
                    <p className='large'>Send an email to <a href='mailto:hello@nathangentry.me'>hello@nathangentry.me</a> to let me know, and we can move forward together from there.</p>
                </>
            }
        </Tile>
    );
}

export default WelcomeTile;