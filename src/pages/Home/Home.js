import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import StyledPage from "../../components/StyledPage/StyledPage";
import Toolbar from "../../components/Toolbar/Toolbar";
import PageWidthWrapper from "../../components/Wrapper/PageWidthWrapper";
import GridWrapper from "../../components/Wrapper/GridWrapper";
import WelcomeTile from "../../components/Tile/WelcomeTile";
import HeroImageTile from "../../components/Tile/HeroImageTile";
import Section from "../../components/Section/Section";
import Tile from "../../components/Tile/Tile";
import StoryTile from "../../components/StoryTile/StoryTile";
import ExperienceTemplate from "../../components/StoryTile/ExperienceTemplate";
import ProjectTemplate from "../../components/StoryTile/ProjectTemplate";
import IconBullet from "../../components/IconBullet/IconBullet";
import ContactSection from "../../components/Section/ContactSection";
import Footer from "../../components/Footer/Footer";

import data from "../../companyData";
import medsolMain from "../../assets/medsolMain.jpeg";
import medsolLogo from "../../assets/medsolLogo.png";
import bridgesMain from "../../assets/bridgesMain.jpg";
import bridgesLogo from "../../assets/bridgesLogo.png";
import spreetailMain from "../../assets/spreetailMain.png";
import spreetailLogo from "../../assets/spreetailLogo.png";
import cboeMain from "../../assets/cboeMain.png";
import cboeLogo from "../../assets/cboeLogo.png";
import dmsiMain from "../../assets/dmsiMain.png";
import dmsiLogo from "../../assets/dmsiLogo.png";
import shindigMain from "../../assets/shindigMain.png";
import shindigLogo from "../../assets/shindigLogo.png";
import ngmeMain from "../../assets/ngmeMain.png";
import ngmeLogo from "../../assets/ngmeLogo.png";
import bulletinMain from "../../assets/bulletinMain.png";
import bulletinLogo from "../../assets/bulletinLogo.png";
import unlMain from "../../assets/unlMain.jpg";
import githubLogo from "../../assets/githubLogo.png";
import linkedInLogo from "../../assets/linkedInLogo.png";

import "./Home.scss";

const Home = (props) => {
  const [company, setCompany] = useState({
    name: null,
    path: "/",
    logo: null,
    primaryColor: "rgba(39, 147, 115, 1.0)",
    primaryDark: "rgba(24, 132, 100, 1.0)",
    opacityColor: "rgba(39, 147, 115, 0.1)",
    opacityDark: "rgba(39, 147, 115, 0.2)",
    fit: null,
    different: null,
    motivation: null,
  });

  const motivation = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ];
  const pitch = [
    "Understandably, many exceptionally talented individuals are vying for a position at {company}. So why should I be considered?",
    "My work on past projects – which you can read about below – is one reason why I think I would be a valuable addition at {company}. These experiences have allowed me to combine my passions for delightful design and clean code to be fully involved in creating both personal and professional web apps, from idea to implementation.",
    "Of course, while I have experience with numerous projects and teams, I also realize there is so much more to learn. As a naturally curious person, I love digging to get to the bottom of a problem and using that new knowledge to develop a solution.",
  ];

  // useEffect(() => {
  //   if (props.match.params.company !== undefined) {
  //     const companyMatch = data[props.match.params.company];
  //     if (companyMatch !== undefined) {
  //       setCompany({
  //         name: companyMatch.name,
  //         path: companyMatch.path,
  //         logo: companyMatch.logo,
  //         primaryColor:
  //           companyMatch.color !== undefined
  //             ? `rgba(${companyMatch.color.r}, ${companyMatch.color.g}, ${companyMatch.color.b}, 1.0)`
  //             : "rgba(39, 147, 115, 1.0)",
  //         primaryDark:
  //           companyMatch.color !== undefined
  //             ? `rgba(${
  //                 companyMatch.color.r - 25 < 0 ? 0 : companyMatch.color.r - 25
  //               }, ${
  //                 companyMatch.color.g - 25 < 0 ? 0 : companyMatch.color.g - 15
  //               }, ${
  //                 companyMatch.color.b - 15 < 0 ? 0 : companyMatch.color.b - 15
  //               }, 1.0)`
  //             : "rgba(24, 132, 100, 1.0)",
  //         opacityColor:
  //           companyMatch.color !== undefined
  //             ? `rgba(${companyMatch.color.r}, ${companyMatch.color.g}, ${companyMatch.color.b}, 0.1)`
  //             : "rgba(39, 147, 115, 0.1)",
  //         opacityDark:
  //           companyMatch.color !== undefined
  //             ? `rgba(${companyMatch.color.r}, ${companyMatch.color.g}, ${companyMatch.color.b}, 0.2)`
  //             : "rgba(39, 147, 115, 0.2)",
  //         motivation:
  //           companyMatch.motivation !== undefined
  //             ? companyMatch.motivation.map((p) =>
  //                 p.split("{company}").join(companyMatch.name)
  //               )
  //             : motivation.map((p) =>
  //                 p.split("{company}").join(companyMatch.name)
  //               ),
  //         pitch:
  //           companyMatch.pitch !== undefined
  //             ? companyMatch.pitch.map((p) =>
  //                 p.split("{company}").join(companyMatch.name)
  //               )
  //             : pitch.map((p) => p.split("{company}").join(companyMatch.name)),
  //       });
  //     } else {
  //       props.history.push("/");
  //     }
  //   }
  // }, [props.match.params.company]);

  const heroRightSectionRef = useRef();
  useEffect(() => {
    const handleWindowResize = () => {
      if (company.name !== null) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const containerHeight = 577;
        const containerTop = windowWidth >= 800 ? 168 : 108;
        if (windowWidth < 550) {
          heroRightSectionRef.current.className = "";
        } else if (containerTop + containerHeight > windowHeight) {
          heroRightSectionRef.current.className = "sticky buttons";
        } else {
          heroRightSectionRef.current.className = "sticky full";
        }
      }
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [company.name]);

  const experienceData = [
    {
      id: "medsol",
      title:
        "Predicting nursing shortages before they happen to improve patient care",
      mainImage: medsolMain,
      logoImage: medsolLogo,
      company: "Medical Solutions",
      location: "Lincoln, NE",
      position: "Development Manager Intern",
      timeframe: "Fall 2022 – Present",
      skills: [
        ["Python", "Databricks", "Machine Learning"],
        ["React", "TypeScript", "Sass"],
        ["C#", ".NET Core", "PostgreSQL"],
      ],
      overview: [
        "Medical Solutions is a medical staffing firm that helps match travel nurses with hospitals across the country. For this project, my team and I are working on a predictive staffing tool for hospital managers and travel nurse recruiters. This tool has two parts: a machine learning model trained on nurse employment data and a web app to convey the model's findings to non-technical employees.",
      ],
      myRole: [
        "In my role as development manager, I:",
        <ul>
          <li>
            Analyze data from 12,000+ travel nurses with Python and Databricks
            to predict nursing shortages before they happen.
          </li>
          <li>
            Develop a web app with React, C#, and .NET to relay model insights
            to staffing managers across 4,000+ medical facilities.
          </li>
          <li>
            Manage a team of 5 developers using agile methodologies and CI/CD
            principles to consistently iterate on feedback.
          </li>
        </ul>,
      ],
    },
    {
      id: "bridges",
      title:
        "Modernizing critical workflows for a nonprofit tackling recidivism",
      mainImage: bridgesMain,
      logoImage: bridgesLogo,
      company: "Bridges to Hope",
      location: "Lincoln, NE",
      position: "Software Engineering Intern",
      timeframe: "Fall 2021 – Spring 2022",
      skills: [
        ["React", "TypeScript", "Sass"],
        ["C#", ".NET Core", "PostgreSQL"],
        ["Figma", "UX Testing", "UI Prototyping"],
      ],
      overview: [
        "Bridges to Hope is a nonprofit organization that helps ex-prisoners transition back into society. When exiting the criminal justice system, reentrants are met with significant up-front costs to restart their life. Bridges to Hope provides these individuals with donations, such as furniture, kitchen supplies, and clothing, to help ease this burden and reduce recidivism.",
        "Over 10 months, a team of four developers and myself:",
        <ul>
          <li>
            Created an award-winning data management system for a nonprofit that
            helps ex-prisoners transition back into society.
          </li>
          <li>
            Modernized 5+ workflows by replacing physical forms with a digital
            administrative portal to improve operational efficiencies.
          </li>
          <li>
            Increased data visibility by using React and TypeScript to craft a
            report generation tool that unlocks funding opportunities.
          </li>
        </ul>,
        "Hear more from the people involved:",
        <iframe
          src="https://www.youtube.com/embed/xEsToqtygco"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="overview-video"
        ></iframe>,
      ],
      myRole: [
        "My area of expertise was in designing and implementing the frontend. This presented an interesting challenge because these user interfaces needed to be analogous to the paper forms, while also requiring more consistency than the free form of paper and pen. Through continuous user interviews with end users, we created designs that inspired confident usage, even in those unfamiliar with technology.",
      ],
    },
    {
      id: "spreetail",
      title:
        "Creating self-service tools empowering warehouse managers nationwide",
      mainImage: spreetailMain,
      logoImage: spreetailLogo,
      company: "Spreetail",
      location: "Lincoln, NE",
      position: "Software Engineering Intern",
      timeframe: "Summer 2021",
      skills: [
        ["C#", ".NET", "Entity Framework"],
        ["React", "JavaScript", "GitLab"],
        ["MVC Framework", "Jira"],
      ],
      overview: [
        "Spreetail is an e-commerce company helping businesses succeed in over a dozen online marketplaces by managing the listings and logistics for them. At Spreetail, I built a self-service portal that empowered warehouse managers to support themselves. These tools eliminated tedious data management tasks for developers, reducing technical bloat and freeing them up to work on tasks that will bring new business value.",
      ],
      myRole: [
        "In my 10 weeks at Spreetail, I:",
        <ul>
          <li>
            Launched self-service tools that empower warehouse managers across 8
            international locations to support themselves.
          </li>
          <li>
            Reduced the technical strain of opening new warehouses to help
            Spreetail achieve next-day shipping to 80% of the U.S.
          </li>
          <li>
            Deployed C# and .NET backend code and API endpoints within a legacy
            codebase, using unit tests to ensure longevity.
          </li>
        </ul>,
        "While I primarily worked in the backend code fleshing out the data management logic, I did convert mockups to frontend code for the first tool and aided in mentoring my fellow intern in his understanding of React.",
      ],
    },
    {
      id: "cboe",
      title: "Developing a custom CMS for a high-traffic market insights blog",
      mainImage: cboeMain,
      logoImage: cboeLogo,
      company: "Cboe Global Markets",
      location: "Lenexa, KS",
      position: "Software Engineering Intern",
      timeframe: "Summer 2020",
      skills: [
        ["React", "Python", "PostgreSQL"],
        ["Django", "Git", "Bitbucket"],
        ["Agile", "Jira", "Communication"],
      ],
      overview: [
        "Cboe Global Markets is a major player in the markets and exchanges industry. During the summer of 2020, they were transitioning their market insights blog into a news and video hub to create a more engaging experience for users. As my intern project, I created a content management system (CMS) for the marketing and communications team to streamline publishing content to the new site.",
        "Over the course of 6 weeks, I:",
        <ul>
          <li>
            Produced a custom Content Management System to manage Cboe’s
            Insights blog that receives 470,000+ monthly hits.
          </li>
          <li>
            Coded full stack functionality in React, Django, and PostgreSQL that
            has enabled non-technical staff to publish 300+ posts.
          </li>
          <li>
            Collaborated with a UI designer and end users to ensure long-term
            usability and consistency within design systems.
          </li>
        </ul>,
      ],
      myRole: [
        "A major focus of mine was on the front-end of the application. I communicated effectively in a remote setting with the lead UI designer and stakeholders in the marketing and communications team. Through this collaboration, I translated wireframes into React code, while incorporating changes that benefited end-users.",
        "For example, the initial design segmented post creation, forcing the user to insert one paragraph, image, or video at a time. When evaluating from the user’s perspective, I felt this would be frustrating — especially compared to their current workflow. Instead, I adapted a familiar rich text editor to meet our project's needs while allowing authors to write posts more seamlessly.",
        "In addition to implementing front-end code, I also created API endpoints and library code in Python, as well as database tables in PostgreSQL to ensure uninterrupted data flow from end-to-end.",
      ],
    },
    {
      id: "dmsi",
      title:
        "Implementing preview functionality into a dynamic door configurator",
      mainImage: dmsiMain,
      logoImage: dmsiLogo,
      company: "DMSi Software",
      location: "Lincoln, NE",
      position: "Software Engineering Intern",
      timeframe: "Spring 2020",
      skills: [
        ["React", "SASS", "TypeScript"],
        ["Golang", "GitHub", "Git"],
        ["Zenhub", "Agile"],
      ],
      overview: [
        "DMSi Software creates innovative business tools for the lumber and building materials industry. One major pain point they recognized was in their door configuration software, which was frustrating and convoluted. This project created new, in-house software that dynamically generated images as users configured their doors to create transparency in the process. One DMSi executive noted this software will soon be used to configure 50% of doors in America.",
        <a
          href="https://digitalcommons.unl.edu/honorsembargoed/138/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="secondary">Read the thesis</button>
        </a>,
      ],
      myRole: [
        "My main task through the internship was developing the preview-in-environment functionality. This feature allowed users to test out any number of door configurations on their house. This added value both to the user and to DMSi by creating a seamless way to reduce the risk of buying a door. ",
        "I quickly adapted to working in an agile-based team environment halfway through the project and took control in developing the feature using React and SASS. By bringing me on as an intern, the team was able to achieve one of their reach goals for the overall project.",
      ],
    },
  ];

  const projectData = [
    {
      id: "shindig",
      title:
        "Launching a web app to help hosts navigate party planning in a pandemic",
      mainImage: shindigMain,
      logoImage: shindigLogo,
      project: "Shindig",
      timeframe: "Spring 2021",
      skills: [
        ["UI/UX Design", "Figma"],
        ["React", "CSS-in-JS"],
        ["Vercel", "Agile Development"],
      ],
      overview: [
        "Shindig is an event planning application that helps hosts customize their events to the comfort levels of their guests in the pandemic. The app allows hosts to create events and then send invites to their friends, who fill out a questionnaire on their comfortability with masks, social distancing, food, etc. These questionnaire responses are then compiled into reports and recommendations, enabling hosts to edit the details of their event such that the comfort of their attendees is maximized.",
        "My primary focus was on user interface design and front-end development. We followed a mobile-first design methodology to create an experience that hosts could easily share with their invitees. When converting those designs to code, I worked on the create event flow and the questionnaire for invitees.",
        <p>
          Shindig was developed as part of my Software Engineering IV class with
          fellow front-end engineer{" "}
          <a
            href="https://www.linkedin.com/in/daniel-noon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniel Noon
          </a>{" "}
          and back-end engineers{" "}
          <a
            href="https://www.linkedin.com/in/annakrueger1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anna Krueger
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/blohrman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Benjamin Lohrman
          </a>
          , and{" "}
          <a
            href="https://www.linkedin.com/in/megan-chaffey/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Megan Chaffey
          </a>
          . Throughout the curriculum, we followed the software development
          lifecycle from requirements elicitation to release.
        </p>,
        <a href="https://shindig.one" target="_blank" rel="noopener noreferrer">
          <button className="secondary">Check out the project</button>
        </a>,
      ],
    },
    {
      id: "ngme",
      title:
        "Applying a personal design system to a portfolio showcase website",
      mainImage: ngmeMain,
      logoImage: ngmeLogo,
      project: "nathangentry.me",
      timeframe: "Summer 2020",
      skills: [
        ["React", "SASS"],
        ["Firebase", "Figma"],
        ["UI/UX Design", "Copywriting"],
      ],
      overview: [
        "nathangentry.me is an interactive portfolio site I created to showcase my past work experience, personal projects, and education history. To ensure flexibility for years to come, I designed the site with componentization in mind, allowing new experiences and projects to be added with ease in the future.",
        "Interactivity was emphasized as a focal point of the website. Transitions originating from user actions spark joy and act as a differentiating factor from other resume sites. These were brought to life in development using React and SASS transitions.",
        "In addition to the general portfolio site for public visitors, I also ensured the site was extensible to match any number of companies and jobs I apply for in the future. By utilizing React Router and styled-components, I was able to create a unique, private experience for each company, including a cover letter and custom theming.",
      ],
    },
    {
      id: "bulletin",
      title: "Creating a centralized hub for law enforcement case management",
      mainImage: bulletinMain,
      logoImage: bulletinLogo,
      project: "Bulletin by BlueLine",
      timeframe: "Fall 2019",
      skills: [
        ["React", "CSS"],
        ["Firebase", "UI/UX Design"],
        ["Entrepreneurship", "Collaboration"],
      ],
      overview: [
        "Bulletin is a case management system prototype developed in coordination with the Nebraska State Patrol. Currently, there is no centralized, digital source of truth for case updates or task management. This tool was created to fill that gap, create transparency throughout the Patrol, and ensure that everyone is acting on the most up-to-date information.",
        "Creating a product that catered to our target audience was a particular challenge in this project. Officers are notoriously reluctant to adopt new technology, so we placed a strong emphasis on simplifying the user experience. This manifests itself in a bare-bones home screen with a limited set of options to proceed. Additionally, after our user interviews, we incorporated a rotating information panel filled with jokes in an attempt to decrease cynicism in the workplace.",
        "Beyond the home screen in the case updates page, we once again focused on simplicity. Highlights draw an officer's attention to new updates, with cases of particular importance at the top of their list. Additionally, search functionality makes the process of finding old information a breeze, with text highlighting to bring the user's attention to any matches.",
        "Bulletin was developed as a part of the Raikes School's Innovation Processes course. Over the course of the semester, my team members and I developed a business model using the Lean Startup methodology. As a proof-of-concept for our business model, we developed this prototype and refined it with feedback from the Nebraska State Patrol.",
      ],
    },
  ];

  const [educationDisplay, setEducationDisplay] = useState(false);
  useEffect(() => {
    const handleResize = () => setEducationDisplay(window.innerWidth >= 1100);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        <Toolbar
          name={company.name}
          logo={company.logo}
          primaryColor={company.primaryColor}
        />
        <PageWidthWrapper>
          <GridWrapper>
            <WelcomeTile {...company} />
            <div
              id="hero-right-container"
              className={company.name !== null ? "sticky" : ""}
              ref={heroRightSectionRef}
            >
              <HeroImageTile
                primaryColor={company.primaryColor}
                opacityColor={company.opacityColor}
              />
              {company.name !== null && (
                <>
                  <button
                    id="see-more-fab"
                    className="primary"
                    onClick={() => setActionsDisplayed(!actionsDisplayed)}
                    onBlur={() =>
                      setTimeout(() => setActionsDisplayed(false), 0)
                    }
                  >
                    <i className="material-icons">
                      {actionsDisplayed ? "close" : "more_vert"}
                    </i>
                  </button>
                  <div
                    id="hero-right-button-list"
                    className={actionsDisplayed ? "opened" : "closed"}
                  >
                    <Link smooth to="#contact">
                      <button className="primary">Get in touch</button>
                    </Link>
                    <a
                      href="https://bit.ly/ngfall2022"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="secondary">View my resume</button>
                    </a>
                    <Link smooth to="#experience">
                      <button className="secondary">Skip to my work</button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </GridWrapper>
          <Section title="Experience" id="experience">
            <GridWrapper>
              {experienceData.map((x) => (
                <StoryTile
                  title={x.title}
                  mainImage={x.mainImage}
                  logoImage={x.logoImage}
                  key={x.id}
                  id={x.id}
                  path={company.path}
                >
                  <ExperienceTemplate {...x} />
                </StoryTile>
              ))}
            </GridWrapper>
          </Section>
          <Section title="Projects" id="projects">
            <GridWrapper>
              {projectData.map((p) => (
                <StoryTile
                  title={p.title}
                  mainImage={p.mainImage}
                  logoImage={p.logoImage}
                  key={p.id}
                  id={p.id}
                  path={company.path}
                >
                  <ProjectTemplate {...p} />
                </StoryTile>
              ))}
            </GridWrapper>
          </Section>
          <Section title="Education" id="education">
            <GridWrapper>
              <StoryTile
                title="University of Nebraska–Lincoln"
                mainImage={unlMain}
                display={educationDisplay}
                id={"unl"}
                path={company.path}
              >
                <div className="highlight-grid">
                  <div>
                    <h5 className="section-heading">Major</h5>
                    <p>Computer Science</p>
                  </div>
                  <div>
                    <h5 className="section-heading">Minors</h5>
                    <p>Business and Math</p>
                  </div>
                  <div>
                    <h5 className="section-heading">Timeframe</h5>
                    <p>August 2019 – May 2023</p>
                  </div>
                  <div id="unl-courses-highlight">
                    <h5 className="section-heading">Coursework</h5>
                    <IconBullet icon="done" text="Software Engineering" />
                    <IconBullet icon="done" text="Algorithms" />
                    <IconBullet icon="done" text="Machine Learning" />
                    <IconBullet icon="done" text="Design Thinking" />
                    <IconBullet icon="done" text="UI Design" />
                    <IconBullet icon="done" text="Statistics" />
                  </div>
                  <div id="involvements-info-bit">
                    <h5 className="section-heading">Involvements</h5>
                    <IconBullet icon="done" text="Raikes Social Media Team" />
                    <IconBullet icon="done" text="Girls Code Lincoln" />
                    <IconBullet icon="done" text="Engineering Diplomats" />
                  </div>
                </div>
                <div id="raikes-info-bit">
                  <h4 className="title">
                    Jeffrey S. Raikes School of Computer Science &amp;
                    Management
                  </h4>
                  <p>
                    The Jeffrey S. Raikes School of Computer Science and
                    Management is a highly selective and competitive honors
                    program at the University of Nebraska-Lincoln focusing on
                    the intersection of technology and business. Along with my
                    cohort of approximately 40 students, I study topics such as
                    software engineering processes, innovation, and business
                    fundamentals to create a well-rounded skillset that I can
                    apply to real-world solutions.
                  </p>
                </div>
              </StoryTile>
            </GridWrapper>
          </Section>
          <GridWrapper>
            <ContactSection url={props.match.url} />
            <Section title="Online" className="logo-tile-container">
              <div className="logo-grid">
                <a
                  href="https://github.com/gentryn31"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Tile className="logo-tile">
                    <img src={githubLogo} alt="GitHub logo" width="120px" />
                  </Tile>
                </a>
                <a
                  href="https://www.linkedin.com/in/nathan-gentry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Tile className="logo-tile">
                    <img src={linkedInLogo} alt="LinkedIn logo" width="120px" />
                  </Tile>
                </a>
              </div>
            </Section>
          </GridWrapper>
        </PageWidthWrapper>
        <Footer />
      </StyledPage>
    </>
  );
};

export default Home;
