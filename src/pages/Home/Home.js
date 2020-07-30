import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import StyledPage from '../../components/StyledPage/StyledPage';
import Toolbar from '../../components/Toolbar/Toolbar';
import PageWidthWrapper from '../../components/PageWidthWrapper/PageWidthWrapper';
import GridWrapper from '../../components/GridWrapper/GridWrapper';
import WelcomeTile from '../../components/Tile/WelcomeTile';
import HeroImageTile from '../../components/Tile/HeroImageTile';
import Section from '../../components/Section/Section';
import Tile from '../../components/Tile/Tile';
import StoryTile from '../../components/StoryTile/StoryTile';
import ExperienceTemplate from '../../components/StoryTile/ExperienceTemplate';
import ProjectTemplate from '../../components/StoryTile/ProjectTemplate';
import IconBullet from '../../components/IconBullet/IconBullet';
import ContactSection from '../../components/Section/ContactSection';
import Footer from '../../components/Footer/Footer';

import data from '../../companyData';
import cboeMain from '../../assets/cboeMain.png';
import cboeLogo from '../../assets/cboeLogo.png';
import dmsiMain from '../../assets/dmsiMain.png';
import dmsiLogo from '../../assets/dmsiLogo.png';
import evergreenMain from '../../assets/evergreenMain.png';
import evergreenLogo from '../../assets/evergreenLogo.png';
import ngmeMain from '../../assets/ngmeMain.png';
import ngmeLogo from '../../assets/ngmeLogo.png';
import bulletinMain from '../../assets/bulletinMain.png';
import bulletinLogo from '../../assets/bulletinLogo.png';
import unlMain from '../../assets/unlMain.jpg';
import githubLogo from '../../assets/githubLogo.png';
import linkedInLogo from '../../assets/linkedInLogo.png';

import './Home.scss'

const Home = props => {
    const [company, setCompany] = useState({
        name: null,
        path: '/',
        logo: null,
        primaryColor: 'rgba(39, 147, 115, 1.0)',
        primaryDark: 'rgba(24, 132, 100, 1.0)',
        opacityColor: 'rgba(39, 147, 115, 0.1)',
        opacityDark: 'rgba(39, 147, 115, 0.2)',
        fit: null,
        different: null,
        motivation: null
    });

    const fit = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    const different = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    const motivation = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    useEffect(() => {
        if (props.match.params.company !== undefined) {
            const companyMatch = data[props.match.params.company];
            if (companyMatch !== undefined) {
                companyMatch !== undefined && setCompany({
                    name: companyMatch.name,
                    path: companyMatch.path,
                    logo: companyMatch.logo,
                    primaryColor: companyMatch.color !== undefined ? `rgba(${companyMatch.color.r}, ${companyMatch.color.g}, ${companyMatch.color.b}, 1.0)` : 'rgba(39, 147, 115, 1.0)',
                    primaryDark: companyMatch.color !== undefined ? `rgba(${companyMatch.color.r - 25 < 0 ? 0 : companyMatch.color.r - 25}, ${companyMatch.color.g - 25 < 0 ? 0 : companyMatch.color.g - 15}, ${companyMatch.color.b - 15 < 0 ? 0 : companyMatch.color.b - 15}, 1.0)` : 'rgba(24, 132, 100, 1.0)',
                    opacityColor: companyMatch.color !== undefined ? `rgba(${companyMatch.color.r}, ${companyMatch.color.g}, ${companyMatch.color.b}, 0.1)` : 'rgba(39, 147, 115, 0.1)',
                    opacityDark: companyMatch.color !== undefined ? `rgba(${companyMatch.color.r}, ${companyMatch.color.g}, ${companyMatch.color.b}, 0.2)` : 'rgba(39, 147, 115, 0.2)',
                    fit: companyMatch.fit !== undefined ? companyMatch.fit : fit,
                    different: companyMatch.different !== undefined ? companyMatch.different : different,
                    motivation: companyMatch.motivation !== undefined ? companyMatch.motivation : motivation
                });
            }
        }
    }, [props.match.params.company]);

    const experienceData = [
        {
            id: 'cboe',
            title: 'Developing a custom CMS for a high-traffic market insights blog',
            mainImage: cboeMain,
            logoImage: cboeLogo,
            company: 'Cboe Global Markets',
            location: 'Lenexa, KS',
            position: 'Web Development Intern',
            timeframe: 'Summer 2020',
            skills: [['React', 'Python', 'PostgreSQL'], ['Django', 'Git', 'Bitbucket'], ['Agile', 'Jira', 'Communication']],
            overview: ['Cboe Global Markets is a major player in the markets and exchanges industry. During the summer of 2020, they sought to transition their high-traffic market insights blog into a news and video hub to create a more engaging experience. As my intern project, I worked on creating a content management system (CMS) for the marketing and communications team to streamline publishing content to the new site.'],
            myRole: ['My primary focus was on the frontend of the application, programmed in React. I communicated effectively in a remote setting with the UI designer, as well as stakeholders in the marketing and communications team. Through this collaboration, I worked towards translating UI designs into code, while incorporating changes to benefit stakeholders involved.',
                'For example, the initial UI design segmented post creation and forced the user to insert one paragraph, image, or video at a time. When evaluating from the user’s perspective, I felt that this workflow would be frustrating compared to their current system. Instead, I worked toward implementing a familiar rich text editor to allow them to write posts in a more seamless manner.',
                'In addition to work on frontend implementation, I also created API endpoints in Django, library code in Python, and database tables in PostgreSQL to ensure the flow of data was seamless throughout the application from end-to-end.']
        },
        {
            id: 'dmsi',
            title: 'Implementing preview functionality into a dynamic door configurator',
            mainImage: dmsiMain,
            logoImage: dmsiLogo,
            company: 'DMSi Software',
            location: 'Lincoln, NE',
            position: 'Frontend Development Intern',
            timeframe: 'Spring 2020',
            skills: [['React', 'SASS', 'Golang'], ['GitHub', 'Git', 'Zenhub'], ['Agile', 'Ownership']],
            overview: ['DMSi creates innovative business software for the lumber and building materials industry. One major pain point they recognized was in their door configuration software, which was frustrating, convoluted, and confusing. This project created new in-house software that dynamically generated images as users configured their doors to create transparency in the process and add value to the user. One DMSi executive noted this software will soon be used to configure 50% of doors in America.',
                <a href='https://digitalcommons.unl.edu/honorsembargoed/138/' target='_blank' rel='noopener noreferrer'><button className='secondary'>Read the thesis</button></a>],
            myRole: ['My main task through the internship was developing the preview in environment functionality. This allowed users to preview the door they had configured in the application on an image of their house. I took ownership of everything from sprint planning and agile ticket creation to the actual development of the feature using React and SASS. By bringing me on as an intern, the team was able to achieve one of their reach goals for the overall project.']
        }
    ];

    const projectData = [
        {
            id: 'evergreen',
            title: 'Launching a design agency that creates dynamic brands and websites',
            mainImage: evergreenMain,
            logoImage: evergreenLogo,
            project: 'Evergreen Design Agency',
            timeframe: 'Summer 2020 – Present',
            skills: [['React', 'CSS', 'Firebase'], ['UI/UX Design', 'Figma', 'Branding'], ['Marketing', 'Entrepreneurship', 'Copywriting']],
            overview: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
        },
        {
            id: 'ngme',
            title: 'Applying a personal design system to a portfolio showcase website',
            mainImage: ngmeMain,
            logoImage: ngmeLogo,
            project: 'nathangentry.me',
            timeframe: 'Summer 2020',
            skills: [['React', 'SASS'], ['Firebase', 'Figma'], ['UI/UX Design', 'Copywriting']],
            overview: ['In an effort to differentiate from other job and internship candidates in a competitive field, I created an interactive portfolio experience by using React and SASS to bring my UI designs to life. To ensure flexibility and sustainability for years to come, I designed the site with segmentation and componentization in mind, allowing new experiences and projects to be added with ease.',
                'In addition to the general portfolio site for public visitors, I also ensured the site was extensible to any number of companies and jobs. By utilizing React Router and styled components, I was able to create a unique experience for each company, including a cover letter and custom theming.'],
        },
        {
            id: 'bulletin',
            title: 'Creating a web application for effective case management',
            mainImage: bulletinMain,
            logoImage: bulletinLogo,
            project: 'Bulletin by BlueLine',
            timeframe: 'Fall 2019',
            skills: [['React', 'CSS'], ['Firebase', 'UI/UX Design'], ['Entrepreneurship', 'Collaboration']],
            overview: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
        }
    ]

    const [educationDisplay, setEducationDisplay] = useState(true);
    useEffect(() => {
        const handleResize = () => setEducationDisplay(document.body.clientWidth >= 800);

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [actionsDisplayed, setActionsDisplayed] = useState(false);

    return (
        <>
            <StyledPage
                primaryColor={company.primaryColor}
                primaryDark={company.primaryDark}
                opacityColor={company.opacityColor}
                opacityDark={company.opacityDark}
            >
                <Toolbar name={company.name} logo={company.logo} primaryColor={company.primaryColor} />
                <PageWidthWrapper>
                    <GridWrapper>
                        <WelcomeTile {...company} />
                        <div id='hero-right-container' className={company.name !== null ? 'sticky' : ''}>
                            <HeroImageTile primaryColor={company.primaryColor} opacityColor={company.opacityColor} />
                            {company.name !== null &&
                                <>
                                    <button id='see-more-fab' className='primary' onClick={() => setActionsDisplayed(!actionsDisplayed)} onBlur={() => setTimeout(() => setActionsDisplayed(false), 0)}><i className='material-icons'>{actionsDisplayed ? 'close' : 'more_vert'}</i></button>
                                    <div id='hero-right-button-list' className={actionsDisplayed ? 'opened' : 'closed'}>
                                        <Link smooth to='#contact'><button className='primary'>Get in touch</button></Link>
                                        <a href='https://bit.ly/resume_fall2020' target='_blank' rel='noopener noreferrer'><button className='secondary'>View my resume</button></a>
                                        <Link smooth to='#experience'><button className='secondary'>Skip to the portfolio</button></Link>
                                    </div>
                                </>
                            }
                        </div>
                    </GridWrapper>
                    <Section title='Experience' id='experience'>
                        <GridWrapper>
                            {experienceData.map(x =>
                                <StoryTile title={x.title} mainImage={x.mainImage} logoImage={x.logoImage}>
                                    <ExperienceTemplate {...x} />
                                </StoryTile>
                            )}
                        </GridWrapper>
                    </Section>
                    <Section title='Projects' id='projects'>
                        <GridWrapper>
                            {projectData.map(p =>
                                <StoryTile title={p.title} mainImage={p.mainImage} logoImage={p.logoImage}>
                                    <ProjectTemplate {...p} />
                                </StoryTile>
                            )}
                        </GridWrapper>
                    </Section>
                    <Section title='Education' id='education'>
                        <StoryTile title='University of Nebraska–Lincoln' mainImage={unlMain} display={educationDisplay}>
                            <div className='highlight-grid'>
                                <div>
                                    <h5 className='section-heading'>Major</h5>
                                    <p>Computer Science</p>
                                </div>
                                <div>
                                    <h5 className='section-heading'>Minors</h5>
                                    <p>Math, Business Management</p>
                                </div>
                                <div>
                                    <h5 className='section-heading'>Timeframe</h5>
                                    <p>August 2019 – May 2023</p>
                                </div>
                                <div id='unl-courses-highlight'>
                                    <h5 className='section-heading'>Courses</h5>
                                    <IconBullet icon='done' text='Java' />
                                    <IconBullet icon='done' text='Design Thinking' />
                                    <IconBullet icon='done' text='Machine Learning' />
                                    <IconBullet icon='done' text='Software Engineering' />
                                    <IconBullet icon='done' text='Statistics' />
                                    <IconBullet icon='done' text='Economics' />
                                    <IconBullet icon='done' text='Accounting' />
                                </div>
                                <div id='involvements-info-bit'>
                                    <h5 className='section-heading'>Involvements</h5>
                                    <IconBullet icon='done' text='Raikes Social Media Team' />
                                    <IconBullet icon='done' text='Girls Code Lincoln' />
                                    <IconBullet icon='done' text='Engineering Diplomats' />
                                    <IconBullet icon='done' text='Youth Entrepreneurship Clinics' />
                                </div>
                            </div>
                            <div id='raikes-info-bit'>
                                <h4 className='title'>Jeffrey S. Raikes School of Computer Science &amp; Management</h4>
                                <p>The Jeffrey S. Raikes School of Computer Science &amp; Management is a highly selective and competitive program focusing on the intersection of technology, business, innovation, and leadership on the campus of the University of Nebraska–Lincoln.</p>
                            </div>
                        </StoryTile>
                    </Section>
                    <GridWrapper>
                        <ContactSection url={props.match.url} />
                        <Section title='Online' className='logo-tile-container'>
                            <div className='logo-grid'>
                                <a href='https://github.com/gentryn31' target='_blank' rel='noopener noreferrer'><Tile className='logo-tile'><img src={githubLogo} alt='GitHub logo' width='120px' /></Tile></a>
                                <a href='https://www.linkedin.com/in/nathan-gentry' target='_blank' rel='noopener noreferrer'><Tile className='logo-tile'><img src={linkedInLogo} alt='LinkedIn logo' width='120px' /></Tile></a>
                            </div>
                        </Section>
                    </GridWrapper>
                </PageWidthWrapper>
                <Footer />
            </StyledPage >
        </>
    );
}

export default Home;