/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shreyas Koundinya",
  title: "Hello, I'm Shreyas",
  subTitle: emoji(
    "A skilled Backend Engineer with over a year of experience in cloud systems, automation, and backend development using Python, Django, and FastAPI. Proficient in designing scalable infrastructure with AWS, Azure, Kubernetes, and Terraform. Strong expertise in building efficient data pipelines and optimizing workflows to enhance system performance and reliability."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1wF2jXg0eipPbS4ASuOim1clYckERB7sZ/edit?usp=drive_link&ouid=114651271030001401367&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shreyas-gk",
  linkedin: "https://www.linkedin.com/in/shreyasgk/",
  gmail: "shreyasgk1234@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build scalable backend applications using Python and frameworks like Django and Flask for seamless, data-driven web applications."
    ),
    emoji("⚡ Deploy backend apps and Python automations to the cloud using AWS, Azure, and Kubernetes for high availability."),
    emoji(
      "⚡ Streamline CI/CD pipelines with Terraform, Docker, and Kubernetes for faster deployments, and enhance data pipeline efficiency with SQL and NoSQL."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Durham College",
      logo: require("./assets/images/durhamlogo.png"),
      subHeader: "Post Graduate Certificate in Data Analytics for Business Decision Making",
      duration: "May 2024 - December 2024",
      desc: "What I accomplished:",
      descBullets: [
        "Built predictive models to drive data-informed decision-making.",
        "Designed interactive visualizations for impactful business insights.",
        "Developed efficient data pipelines and backend solutions using Python and SQLite databases."
      ]
    },
    {
      schoolName: "Durham College",
      logo: require("./assets/images/durhamlogo.png"),
      subHeader: "Post Graduate Certificate in Cloud Computing",
      duration: "September 2023 - April 2024",
      desc: "What I accomplished:",
      descBullets: [
        "Cloud infrastructure and database deployment with DevOps CI/CD.",
        "Kubernetes and cloud migrations for scalable solutions.",
        "Security-focused development and scripting in cloud environments."
      ]
    },
    {
      schoolName: "JSS Academy of Technical Education",
      logo: require("./assets/images/jsslogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2017 - April 2021"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "60%"
    },
    {
      Stack: "DevOps/Deployment",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Ernst & Young LLP",
      companylogo: require("./assets/images/eylogo.jpg"),
      date: "January 2022 – May 2023",
      desc: "Senior Analyst",
      descBullets: [
        "As a Senior Analyst, deployed automations to the cloud, streamlined data extraction and email handling with Django across diverse sources, implemented frontend automation for SAP, Salesforce, and Power BI dashboards, optimized SQL queries with caching, and developed REST APIs for efficient microservices communication."
      ]
    },
    {
      role: "Client Serving Contractor - EY",
      company: "Xpheno Pvt. Ltd.",
      companylogo: require("./assets/images/xphenologo.png"),
      date: "December 2021 – January 2022",
      desc: "Collaborated with the client to automate data processes using Python in tandem with cloud technologies, with a strong focus on automating and enhancing efficiencies."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  projects: [
    {
      image: require("./assets/images/netflixclone.png"),
      projectName: "Netflix Like Clone Application",
      projectDesc: "Designed and developed a Netflix clone app with Django and React, integrating TMDB API for dynamic content and deployed on AWS Kubernetes for scalable, high-performance user experience.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/shreyas-gk/netflixclone/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/blog.jpeg"),
      projectName: "AI Powered Blog Generator",
      projectDesc: "Built an AI-powered blog generator using Python with HTML and CSS, creating concise summaries from YouTube video links. Streamlines content creation by transforming video content into readable blogs.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/shreyas-gk/aibloggenerator"
        }
      ]
    },
    {
      image: require("./assets/images/dataeng.jpeg"),
      projectName: "End-to-End Data Engineering Project",
      projectDesc: "Built an end-to-end data engineering pipeline on Azure using Data Factory, Synapse, Databricks, and Power BI to automate data ingestion, transformation, and reporting for seamless analytics and business insights.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/shreyas-gk/End-to-End-Azure-Data-Engineering"
        }
      ]
    },
    {
      image: require("./assets/images/dfs.webp"),
      projectName: "Distributed File Processing System on AWS Using Lambda and S3",
      projectDesc: "Built a distributed file processing system on AWS using S3 and Lambda, enabling parallel, scalable processing for various file types. The setup includes automated test case generation and optimized workload distribution across Lambda functions for enhanced efficiency.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/shreyas-gk/awsfilehandling"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "I am Exceptional Award - EY",
      subtitle:
        "I received this certificate from EY for driving digital transformation by championing new technologies and fostering a digital-first mindset, helping prepare our team for the future.",
      image: require("./assets/images/exceptional.jpeg"),
      footerLink: [
        {
          name: "Award",
          url: "https://drive.google.com/file/d/1etaayEqsGsm5SbIHPf-R3ztAxmYn_1Cm/view?usp=sharing"
        }     
      ]
    },
    {
      title: "Durham College Honor Roll",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/honor.webp"),
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1RSQG4_hoAwLzFqJYx4XIMsE_WJ2H8-JR/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Ontario College Graduate Certificate",
      subtitle: "Completed certifications from Durham College, including two Ontario College Graduate Certificates: one in Cloud Computing and another in Data Analytics for Business Decision Making.",
      image: require("./assets/images/dccert.webp"),
      footerLink: [
        {
            name: "Cloud Computing",
            url: "https://drive.google.com/file/d/1J6F_0ILsq7-xeJHDbe-tv2cNd-LcETR5/view?usp=sharing"
        },
        {
            name: "Data Analytics",
            url: "https://drive.google.com/file/d/1J6F_0ILsq7-xeJHDbe-tv2cNd-LcETR5/view?usp=sharing"
        }
    ]
    
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      image: require("./assets/images/azassociate.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1sSogs0ezY497N0Uruscl3d6NSOj7IPxm/view?usp=drive_link"
        }
      ]
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      image: require("./assets/images/aws.jpeg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1tJTOdUCx2hkSj55rkHY77LPTs_N_IfW7/view?usp=sharing"
        }
      ]
    },
    {
      title: "Coursera - PY4E",
      image: require("./assets/images/coursera.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1tJTOdUCx2hkSj55rkHY77LPTs_N_IfW7/view?usp=sharing"
        }
      ]
    }
  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (437) 430 - 0648",
  email_address: "shreyasgk1234@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
