import React from 'react';
import IconBullet from '../IconBullet/IconBullet';

const ExperienceTemplate = props => {
    return (
        <div className='highlight-grid'>
            <div>
                <h5 className='section-heading'>Company</h5>
                <p>{props.company}</p>
            </div>
            <div>
                <h5 className='section-heading'>Location</h5>
                <p>{props.location}</p>
            </div>
            <div>
                <h5 className='section-heading'>Position</h5>
                <p>{props.position}</p>
            </div>
            <div>
                <h5 className='section-heading'>Timeframe</h5>
                <p>{props.timeframe}</p>
            </div>
            <div className='full-width'>
                <h5 className='section-heading'>Skills</h5>
                <div className='skills-highlight-grid'>
                    {props.skills.map(column =>
                        <div key={column}>
                            {column.map(skill => <IconBullet icon='done' text={skill} key={skill} />)}
                        </div>
                    )}
                </div>
            </div>
            <div className='full-width'>
                <h5 className='section-heading'>Overview</h5>
                {props.overview.map(paragraph =>
                    <p key={paragraph}>{paragraph}</p>
                )}
            </div>
            <div className='full-width'>
                <h5 className='section-heading'>My Role</h5>
                {props.myRole.map(paragraph =>
                    <p key={paragraph}>{paragraph}</p>
                )}
            </div>
        </div>
    );
}

export default ExperienceTemplate;